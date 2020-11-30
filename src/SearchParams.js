import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext'
const SearchParams = () => {

    const [location, setlocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);
    const [theme, setTheme] = useContext(ThemeContext)
     

    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        })

        setPets(animals || [])
    }
    useEffect(() => {
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then(({ breeds }) => {
          const breedStrings = breeds.map(({ name }) => name);
          setBreeds(breedStrings);
        }, console);
      }, [animal]);

    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}>
                <label htmlFor="location">
                    <b>Location</b>
                    <input 
                       id='location'
                       value={location}
                       placeholder='Enter the Location'
                       onChange={e => setlocation(e.target.value)} />
                </label>

                <AnimalDropdown />
                <BreedDropdown />
                <label htmlFor="theme">
                    Theme
                    <select 
                    value={theme}
                    onChange={e => setTheme(e.target.value)}
                    onBlur={e => setTheme(e.target.value)}>
                        <option value="#FF0099">Color four</option>
                        <option value="#c471ed">Color One</option>
                        <option value="#12c2e9">Color two</option>
                        <option value="#f64f59">Color three</option>
                    </select>
                </label>
                <button style={{ backgroundColor: theme, borderColor: theme, outline : 0} }>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )

}

export default SearchParams;
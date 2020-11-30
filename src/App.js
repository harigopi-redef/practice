import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';
// import Pet from './Pet';

// throw new Error('lol');
const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", { id: "something-important" }, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "luna",
  //     animal: "dog",
  //     breeds: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breeds: "Cockatiel",
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "cat", breeds: "Mixed" }),
  // ]);

  const themehook = useState('red');
  return (
    <React.StrictMode>
        <ThemeContext.Provider value={themehook}>
          <div>
            <header>
              <Link to="/"></Link>
            </header>
            <Router>
                <SearchParams path="/" />
                <Details path="/details/:id" />
            </Router>
          </div>
        </ThemeContext.Provider>
    </React.StrictMode>
  )
};

render(<App />, document.getElementById("root"));

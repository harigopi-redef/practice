import React, { useState } from 'react';

const useDropdown = (labels, defaultstate, option) => {

    const [state, setState] = useState(defaultstate);
    const id = `use-dropdown-${labels.replace(' ', '').toLowerCase()}`;

    const Dropdown = () => (
        <label htmlFor={id}>
            {labels}
            <select 
            id={id}
            value={state}
            onChange={e => setState(e.target.value)}
            onBlur={e => setState(e.target.value)}
            disabled={option.length === 0}>
            
            {
                option.map(items => <option value={items} key={items}>{items}</option>)
            }
            
            </select>
        </label>
    )
    return [state, Dropdown, setState]
};

export default useDropdown
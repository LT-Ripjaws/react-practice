// onChange event handler used primarily for input fields to capture user input in real-time.
// It triggers every time the value of the input changes, allowing for dynamic updates and validations.
// <input type="text" onChange={handleChange} />

// <textarea onChange={handleChange}></textarea>

// <select onChange={handleChange}>
//   <option value="option1">Option 1</option>
//   <option value="option2">Option 2</option>
// </select>

// <radio name="options" value="option1" onChange={handleChange} /> Option 1
// <radio name="options" value="option2" onChange={handleChange} /> Option 2

import React, { useState } from 'react';

function OnChange() {

    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Your name is: {name}</p>
        </div>
    );
}

export default OnChange;
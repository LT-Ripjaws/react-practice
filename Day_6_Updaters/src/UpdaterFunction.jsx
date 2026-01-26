// updater Function = a Function passed as an argument to setState() usually
// ex. setYear(arrow Function)
// Allow for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions
// Always use the updater function when the new state depends on the previous state

import {useState} from 'react';

function UpdaterFunction() {

    const [year, setYear] = useState(2022);

    function handleNextYear() {
        // takes the pending state to calculate the next state not the current state.
        // thats why we can call it multiple times and it will work as expected
        setYear((prevYear) => prevYear + 1);
        setYear((prevYear) => prevYear + 1); // its good practice to use the updater function always () => {} inside another function.
    }

    return (
        <div>
            <h2>Year: {year}</h2>
            <button onClick={handleNextYear}>Next Year</button>
        </div>
    );
}

export default UpdaterFunction;
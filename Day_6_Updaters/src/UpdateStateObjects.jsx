import {useState} from 'react';

function UpdateStateObjects() { 
    const [car, setCar] = useState({year: 2020, make: 'Toyota', model: 'Corolla'}); // useState returns an array with two elements: the current state value and a function to update that value.

    function handleYearChange(event) {
        setCar(prevCar => ({...prevCar, year: event.target.value})) // using the spread operator to copy the existing properties of the car object and then updating only the year property.
    }

    function handleMakeChange(event){
        setCar(prevCar => ({...prevCar, make: event.target.value}))
    }

    function handleModelChange(event){
        setCar(prevCar => ({...prevCar, model: event.target.value}))
    }

    return(
        <div>
            <p>Your favourite car is: {car.make} {car.model} {car.year}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
            <input type="text" value={car.model} onChange={handleModelChange}/> <br/>

        </div>
    );
}
export default UpdateStateObjects;
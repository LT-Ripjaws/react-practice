import {useState} from  'react';


function UpdateObjectArrays() {
 
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(prevCars => [...prevCars, newCar]);
    }

    function handleRemoveCar(index){
        setCars(prevCars => prevCars.filter((car, i) => i !== index));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }
 
 return (<>
    <div>
        <p>Your Cars:</p>
        <ul>
            {cars.map((car, index) => <li key={index}>{car.make} {car.model} {car.year}</li>)} 
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} placeholder='Year'/> <br/>
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Make'/> <br/>
        <input type="text" value={carModel} onChange={handleModelChange} placeholder='Model'/> <br/>
        <button onClick={handleAddCar}>Add Car</button>
        <button onClick={() => handleRemoveCar(cars.length - 1)}>Remove Last Car</button>
    </div>
  </>);
}

export default UpdateObjectArrays
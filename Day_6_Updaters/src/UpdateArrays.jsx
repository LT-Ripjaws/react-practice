// We're going to update the state of an array using the updater function form of the setter function from useState.
import {useState} from 'react';

function  UpdateArrays() {
    const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana']); // Initializing the state with an empty array.
     
    function handleAddFood(){
        const newFood = document.getElementById('foodInput').value;
        setFoods(prevFoods => [...prevFoods, newFood]); // Using the updater function form to add a new item to the array.
    }

    function handleRemoveFood(){
        setFoods(prevFoods => prevFoods.slice(0, -1)); // Using the updater function form to remove the last item from the array.
    }

    return(
        <div>
            <p>Your favourite foods are:</p>
            <ul>
                {foods.map((food, index) => <li key={index}>{food}</li>)} 
            </ul>
            <input type="text" id="foodInput" placeholder='Enter a new food item'/>
            <button onClick={handleAddFood}>Add Food</button>
            <button onClick={handleRemoveFood}>Remove Food</button>
        </div>
    );
}

export default UpdateArrays;
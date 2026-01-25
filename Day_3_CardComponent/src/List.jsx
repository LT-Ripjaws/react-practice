
function List(){

    const fruits = [{name:'Apple', calories:95}, {name:'Banana', calories:105}, {name:'Cherry', calories:50}, {name:'Date', calories:130}];
    // we leant that we need key prop when we are rendering list of items using map function

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit.name} - {fruit.calories} calories</li>
            ))}
        </ul>
    );
}

export default List;
import Card from "./Card.jsx";
import Student from "./Student.jsx";
import List from "./List.jsx";
import Button from "./Button.jsx";
// props are read only properties that are shared between components
// <Component key=value />

// Conditional rendering allows you to render different UI elements based on certain conditions.

// clickevent is an interactive event that occurs when a user clicks on an element.
// we can respond to click events by passing a callback to the onClick attribute of an element.
function App() {
    return(
      <>
        <Card />
        <Student isLoggedIn={false} name="John Doe" age={20} isStudent={true}/>
        <List />
        <Button />
      </>
    );
}
export default App
// In the above code, we are passing props to the Student component to demonstrate conditional rendering.
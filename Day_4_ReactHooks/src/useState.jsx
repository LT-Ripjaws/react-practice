import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  // When you use the setter function, it will trigger a re-render of the component
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default UseState;

//  A stateful variable is a variable that retains its value and state across different, sequential operations, method calls,
//  or application lifecycles. Unlike stateless variables, which are re-initialized for every action, stateful variables change over time to
//  reflect the updated state of an application or session. 

// In React, stateful variables are commonly used to manage dynamic data within components.
// They allow components to respond to user interactions, data fetching, and other events by updating the UI accordingly.
// In React, stateful variables are typically created using the useState hook in functional components or the state property in class components.
// When the state of a component changes, React re-renders the component to reflect the new state in the UI.

// In the example above, count is a stateful variable that retains its value across re-renders of the MyComponent component.
// Each time the button is clicked, the setCount function updates the count variable, triggering a re-render to display the new count value.
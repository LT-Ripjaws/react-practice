// React Hooks = Special functions that allows functional components to
// "hook into" React features. (e.g., state and lifecycle methods) / use react features
// without writing a class component.
// (useState, useEffect, useContext, useRef, useReducer, useMemo, useCallback, etc.)


// useState() =  A hook that allows the creation of a stateful variable
// inside a functional component. It returns an array with two elements:
// the current state value and a function to update that value.
// Syntax: const [state, setState] = useState(initialState);
// [name, setName] = useState('John Doe');

//-----------------------
// useEffect() = React Hook that tells React do something after render.
// By default, it runs both after the first render and after every update.
// do some code when the component renders, component mounts (create and appending to dom), or state of value changes.
// You can optionally return a cleanup function.
// Syntax: useEffect(() => { // code to run after render }, [dependencies]);
// 1. useEffect(() => {}) //    - runs after every render, any render
// 2. useEffect(() => {}, []) // - runs only on the first render
// 3. useEffect(() => { return () => {} }, []) // - runs on the first render and when the component unmounts
// 4. useEffect(() => {}, [variable]) // - runs on the first render and when "variable" changes

// USES:
// Event Listerners
// Dom Manipulation
// Subscribing/Unsubscribing
// Fetching Data from API
// Animations
// Timers (setTimeout, setInterval)
// Clean up on unmounting

//-----------------------
// useContext() =  A hook that allows you to share values between multiple levels of components without pass props through each level.
// syntax: const value = useContext(MyContext);

//PROVIDER COMPONENT
// import {createContext} from "react";
// export const MyContext = createContext();
// <MyContext.Provider value={/* some value */}>
//     {/* child components */}
// </MyContext.Provider>

//CONSUMER COMPONENT
// import {useContext} from "react";
// import {MyContext} from "path to context file";
// const value = useContext(MyContext);
//-----------------------

// useRef() = "use reference" does not cause re-renders when its value changes.
// when you want a component to 'remember' some info, but you don't want that information to trigger new renders.
// syntax: const myRef = useRef(initialValue);
// USES: Accessing DOM elements, storing mutable values, keeping values between renders without causing re-renders.

// 1. Accessing DOM Elements
// 2. Handling focus, animations and transitions
// 3. Managing timers and intervals
// 4. Storing previous state values
// 5. Integrating with third-party libraries

//-----------------------

// useReducer() = An alternative to useState for more complex state management.
// syntax: const [state, dispatch] = useReducer(reducer, initialState);
// USES: Complex state logic, multiple sub-values, state that depends on previous state.

//-----------------------
import UseEffect from "./useEffect.jsx";
import UseState from "./useState.jsx";
import ComponentA from "./ComponentA.jsx";
import UseRef from "./useRef.jsx";

function App() {

  return (
    <>
      <UseState />
      <UseEffect />
      <UseRef />
      <ComponentA />
    </>
  )
}

export default App

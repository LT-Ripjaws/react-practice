import React, {useState, useEffect} from "react";

function UseEffect() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width, height]);


    useEffect(() => {
        document.title = `Width: ${width}, Height: ${height}`;
    }, [width, height]); 


    return (<>
        <p>Width: {width}</p>
        <p>Height: {height}</p>
    </>);
}

export default UseEffect;
// In this example, we have a component that tracks the window's width and height.
// We use the useEffect hook to add an event listener for the window resize event when the component mounts.
// The handleResize function updates the width and height state variables whenever the window is resized.
// We also return a cleanup function from the useEffect hook to remove the event listener when the component unmounts,
// preventing potential memory leaks.
// Additionally, we have another useEffect hook that updates the document title whenever the width or height changes.
// This demonstrates how useEffect can be used for side effects like DOM manipulation based on state changes.

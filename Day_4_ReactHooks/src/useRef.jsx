import React, {useEffect, useRef} from "react";

function UseRef() {

    const ref = useRef(0);
    const inputRef = useRef(null);

    function handleClick() {
        ref.current = ref.current + 1;
        console.log(`Button clicked ${ref.current} times`);
    }

    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component unmounted');
        };
    }, []);
    return (
        <div>
            <h2>useRef Hook Example</h2>
            <button onClick={handleClick}>Click Me</button>
            <p>Open the console to see the click count.</p>
            <input ref={inputRef} type="text" placeholder="Focus me on mount" />
            <button onClick={() => {inputRef.current.focus();
                inputRef.current.value = "Input focused!";
                inputRef.current.style.backgroundColor = "lightyellow";
            }}>Focus Input</button>
        </div>
    );
}

export default UseRef;
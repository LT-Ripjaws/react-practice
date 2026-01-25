function Button() {

    const handleClick = (e) => {
        alert("Button Clicked!");
        e.target.textContent = "Clicked";
    }
    return ( <button onClick={handleClick}>Click Me</button> );
}
export default Button;
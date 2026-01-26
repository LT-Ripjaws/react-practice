import ComponentD from "./ComponentD";

function ComponentB(){

    return (
        <div className="box">
            <h1>
                Component B
                <ComponentD />
            </h1>
        </div>
    )
}
export default ComponentB;
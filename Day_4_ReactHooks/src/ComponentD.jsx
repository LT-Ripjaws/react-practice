import React, {useContext} from "react";
import { UserContext } from "./ComponentA";

function ComponentD(){
    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>
                Component D
                <h2>Hellow {user} from Component D</h2>
            </h1>
        </div>
    )
}
export default ComponentD;
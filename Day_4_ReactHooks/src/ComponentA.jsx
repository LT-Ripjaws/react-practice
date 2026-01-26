import ComponentB from "./ComponentB";
import React, { useState, createContext } from "react";

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState('Jane Doe');
    return (
        <div className="box">
            <h1>
                Component A
                <h2>Hellow {user}</h2>
                <UserContext.Provider value={user}>
                    <ComponentB />
                </UserContext.Provider>
            </h1>
        </div>
    )
}
export default ComponentA;
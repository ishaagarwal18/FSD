//write react component to increase value by 5 which clicking on button initilize value with 20.
//use usereduced hook to perform this task

import { use, useReducer } from "react";

function reducer(state, action) {
    return state+action;
}

function UR1(){
    const[state,dispatch]=useReducer(reducer,20);
    return(
        <div align="center">
            <h1>{state}</h1>
            <button onClick={()=>dispatch(5)}>Increase by 5</button>
        </div>
    )
}

export default UR1;
//create a react js to increase by 1 while clicking on button increment 
//and decrease value by 1 while on button decrement.
//initialize the value with 0 
//use useReducer hook to perform this task

import { useReducer } from "react";

function reducer(state, action) {
    if(action.type==="increment"){
        return state+1;
    }
    else{
        return state-1;
    }
}

function UR2(){
    const[state,dispatch]=useReducer(reducer,0);
    return(
        <div align="center">
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button><br></br>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        </div>
    )
}
export default UR2;
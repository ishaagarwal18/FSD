//create a react app to display product quantity 
//add button to add item and remove item 
//quantity should never go below 0 

import {useReducer} from "react";

function reducer(state, action) {
    if(action.type==="increment"){
        return state+1;
    }
    else{
        if(state==0){
            alert("Quantity cannot be less than 0");
            return state;
        }
        return state-1;
    }
}
function UR3()
{
    const[state,dispatch]=useReducer(reducer,0);
    return(
        <div>
            <h1>Quantity : {state}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>Add Item</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Remove Item</button>
        </div>
    )
}

export default UR3;
// Create a ReactJS program using function component having two input 
// fields for num1 and num2 and two buttons for addition and subtraction of 
// the two numbers. Display the respective outputs on same page using 
// useState hook. Also display alert box as an effect on every time the addition 
// button is clicked using useEffect hook. 

import { useEffect, useState } from "react";
function UE3(){
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [result,setResult]=useState(0);
    useEffect(()=>{
        alert("Addition button is clicked")
    }
    ,[result])
    const add=()=>{
        setResult(Number(num1)+Number(num2));
    }   
    const sub=()=>{
        setResult(Number(num1)-Number(num2));
    }
    return(
        <>
            <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)} />
            <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)} />        
            <button onClick={add}>Addition</button>
            <button onClick={sub}>Subtraction</button>
            <h1>Result: {result}</h1>
        </>
    )
}   
export default UE3;
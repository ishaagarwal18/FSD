//Write react js to perform task
// add 2 buttons and increment count by 1 with each click
// display alert as an effect on specified conditions
// 1. effect will be triggered only when page render for the first time(empty array)
// 2. effect will be triggered every time the button A is clicked (button A in dependency array)
// 3. when the page render for the first time and on every update event triggered

import { use, useEffect, useState } from "react";
function UE1(){
    const [count,setCount]=useState(0);
    const [calculation,setcal]=useState(0);
    useEffect(()=>{
        alert("Page rendered for the first time")
    }
    ,[])
    useEffect(()=>{
        alert("Button A is clicked")
    },[count])

    useEffect(()=>{
        alert("Page rendered for the first time and on every update event triggered")
    })  
    const changecount=()=>{
        setCount(count+1);
    }
    const changecal=()=>{
        setcal(calculation+1);
    }
    return(
        <>
            <h1>Count: {count}</h1>
            <h1>Calculation: {calculation}</h1>
            <button onClick={changecount}>Button A</button>
            <button onClick={changecal}>Button B</button>
        </>
    )
}

export default UE1;
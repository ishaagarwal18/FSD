//write react js to create a digital clock running continuously 
// and display the current time in the format of hours:minutes:seconds

import { useEffect, useState } from "react";
function UE2(){
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
    },[])
    return(
        <>
            <h1>Current Time: {time}</h1>
        </>
    )
}
export default UE2;
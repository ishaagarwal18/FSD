// Write react js script to perform the task as below using function component:
// •	Create array of objects which have id, name & city of person.
// •	Display id & name of persons having city name “Ahmedabad” . Use props.
// No need to write App.js file. 

import PB from "./PB320-1";
function PB320(){
    const person=[
        {
            id:1,
            name:"Isha",
            city:"Ahmedabad"
        },
        {
            id:2,
            name:"Nitya",
            city:"Surat"
        },
        {
            id:3,
            name:"Rishita",
            city:"Ahmedabad"
        }
    ]
    return(
        <PB persons={person}></PB>
    )
}

export default PB320;
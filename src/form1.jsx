import { useState } from "react";

function Form1()
{
    const[name,setName]=useState("")
    const[mycar,setmycar]=useState("");
    // function handlechange(event)
    // {
    //     setmycar(event.target.value)
    //     // alert(`The value you selected was:${mycar}`);
    // }
    function handleSubmit(event)
    {
        event.preventDefault();
        setmycar(event.target.value)
        alert(`The value you selected was:${mycar}`);
        // alert(`The name you entered was:${name}`);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <textarea rows={20} cols={30} onChange={(e)=>setName(e.target.value)}></textarea><br></br>
                {/* Enter your name:<input type="textarea" value={name}onChange={(e)=>setName(e.target.value)}/> */}
                <select value={mycar} onChange={handleSubmit}>
                    <option  selected>Select Your car</option>
                    <option value="Ford">Ford</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="BMW">BMW</option>
                    <option value="Maruti">Maruti</option>
                    <option value="Volvo">Volvo</option>
                </select>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Form1
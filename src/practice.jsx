//1.Firstname,email,password,textarea for message, radio button for gender, dropdown for city,
//display submitted values in alert box.

import { useState } from "react"

function Practice()
{
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[pass,setpass]=useState("");
    const[msg,setmsg]=useState("");
    const[gender,setgender]=useState("");
    const[city,setcity]=useState("");
    function handlesubmit(event)
    {
        // event.preventDefault();
        setname(event.target.value)
        setemail(event.target.value)
        setpass(event.target.value)
        setmsg(event.target.value)
        setgender(event.target.value)
        setcity(event.target.value)
        alert(`
            Details:${name},${email},${pass},${msg},${gender},${city}
            `)
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                Enter name:<input type="text" value={name} name="name" onChange={(e) => setname(e.target.value)}></input><br></br>
                Enter email:<input type="email" value={email} name="email" onChange={(e) => setemail(e.target.value)}></input><br></br>
                Enter password:<input type="password" value={pass} name="pass" onChange={(e) => setpass(e.target.value)}></input><br></br>
                Enter Message:<textarea rows={20} cols={20} value={msg} onChange={(e) => setmsg(e.target.value)}></textarea><br></br>
                Gender:
                <input type="radio" name="gender" value="Male" onChange={(e) => setgender(e.target.value)}/>Male
                <input type="radio" name="gender" value="Female" onChange={(e) => setgender(e.target.value)}/>Female
                <input type="radio" name="gender" value="Other" onChange={(e) => setgender(e.target.value)}/>Other
                <br></br>
                City:
                <select onChange={(e) => setcity(e.target.value)}>
                    <option selected disabled>--select</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Surat">Surat</option>
                    <option value="Dholka">Dholka</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Practice
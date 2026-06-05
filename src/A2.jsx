// fetch a random joke from the api and display it when the button is clicked

import { useEffect, useState } from "react";
import axios from "axios";  
function A2(){
    const [joke, setJoke] = useState("");
    const fetchJoke = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then(response => {
            setJoke(`${response.data.setup} - ${response.data.punchline}`);
        }
        )
    }
    return(
        <>
            <button onClick={fetchJoke}>Get a Joke</button>
            <h1>{joke}</h1>
        </>
    );
}
export default A2;
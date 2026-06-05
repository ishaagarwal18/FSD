// to display images by requesting api using axios

import { useEffect, useState } from "react";
import axios from "axios";
function A1(){
    const [images, setImages] = useState([]);
    useEffect(()=>{
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            setImages(response.data);
        })
        .catch(error => {
            console.error("Error fetching images:", error);
        });
    }, []);
    return(
        <>
            {images.map(image => (
                <img key={image.id} src={image.url} alt={image.title} />
            ))}
        </>
    );
}
export default A1;

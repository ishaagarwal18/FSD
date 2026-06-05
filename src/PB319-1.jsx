function File1(props){
    return(
        <div>
            <h1>{props.productName}</h1>
            <p>Price: {props.price}</p>
            <button onClick={()=>{alert("Your Product is Added to cart!")}}>Add to cart</button>
        </div>
    )
}
export default File1;
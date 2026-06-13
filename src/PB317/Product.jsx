function Product(props){
    return(
        <div>
            {
                props.info
                .map((p)=>{
                    return(
                        <div>
                            <p>{p.id}</p>
                            <p>{p.price}</p>
                            <p>{p.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Product
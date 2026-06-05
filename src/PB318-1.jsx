function PB(props){
    let count=0
    return (
        <div>
            {
                props.age1.
                filter((a)=>a>60)
                .map((a)=>{
                    count=count+1
                    return(
                        <div key={a.index}>
                            <p>{a}</p>
                        </div>
                    )
            
                })
            }
            <p>{count}</p>
        </div>
    )
}
export default PB;
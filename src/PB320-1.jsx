function PB(props)
{
    return (
        <div>
            {props.persons.map((item)=>{
                if(item.city==="Ahmedabad")
                {
                    return(
                        <div key={item.id}>
                            <p>{item.id} {item.name}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default PB;
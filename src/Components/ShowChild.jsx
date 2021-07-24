import { useContext, useState, useEffect } from "react"
import { stateContext } from "../stateReducer"
const ShowChild = (props) => {
    const context = useContext(stateContext)
    const [entries, setEntries] = useState([])
    async function fetchChild() {
        const res = await fetch(`http://localhost:4000/api/v1/children/${props.match.params.id}`,{ headers: {
            Authorization: `Bearer ${context.token}`
          }})
        const data = await res.json()
        setEntries(data)
        
    }
    useEffect(() => {
        fetchChild()
    }, [])
    console.log()
    return (
        <div>
            <p>{props.match.params.id}</p>
            {entries.map((item, index)=>{
               return (
                   <>
                   <input type="checkbox" name={item[1]} id="" />
                   <label>{item[1]} : {item[0].time}</label>
                   <br></br>
                   </>
                   ) 
                   
            })}
        </div>
    )
}

export default ShowChild

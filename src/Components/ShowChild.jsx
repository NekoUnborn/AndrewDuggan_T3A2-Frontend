import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { stateContext } from "../stateReducer"
const ShowChild = (props) => {
    const context = useContext(stateContext)
    const {dispatch, checkListEntries} = context
    async function fetchChild() {
        const res = await fetch(`http://localhost:4000/api/v1/children/${props.id}`,{ headers: {
            Authorization: `Bearer ${context.token}`
          }})
        const data = await res.json()
        console.log(data)
        dispatch({
            type: 'setChecklistEntries', 
            data: data
        })
        
    }
    useEffect(() => {
        fetchChild()
    }, [])

    return (
        <div>
            <p>{props.id}</p>
            {checkListEntries.map((item, index)=>{
               return (
                   <>
                   <input type="checkbox" name={item[1]} id="" />
                   <label>{item[1]} : {item[0].time}</label>
                   <br></br>
                   </>
                   ) 
                   
            })}
            <Link to={`/child/${props.id}/edit`}>Edit Checklist </Link>
            <button>Delete</button>
        </div>
    )
}

export default ShowChild

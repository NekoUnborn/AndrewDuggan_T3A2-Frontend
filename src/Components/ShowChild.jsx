import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { stateContext } from "../stateReducer"
const ShowChild = (props) => {
    const context = useContext(stateContext)
    const [checkList, setCheckList] = useState([])
    const {token } = context
    async function fetchChild() {
        const res = await fetch(`http://localhost:4000/api/v1/children/${props.match.params.id}`,{ headers: {
            Authorization: `Bearer ${token}`
          }})
        const data = await res.json()
        console.log(data)
        setCheckList(data)
    }
    useEffect(() => {
        fetchChild()
    },[])

    return (
        <div>
            <h1>LEmons</h1>
            <p>{props.id}</p>
            {checkList.map((item, index)=>{
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

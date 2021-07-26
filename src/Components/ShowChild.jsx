import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { stateContext } from "../stateReducer"
import ChildForm from "./ChildForm"
const ShowChild = (props) => {
    const context = useContext(stateContext)
    const [checkList, setCheckList] = useState([])
    const [editMode, setEditMode] = useState(true)
    const {token } = context
    async function fetchChild() {
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/children/${props.match.params.id}`,{ headers: {
            Authorization: `Bearer ${token}`
          }})
        const data = await res.json()
        console.log(data)
        setCheckList(data)
    }
    useEffect(() => {
        fetchChild()
    },[])
    function editModeSwitch () {
        editMode ? setEditMode(false) :setEditMode(true)
    }
    console.log(checkList)
    console.log(process.env)
    return (
        <>
        {editMode ? (
            <div>
                <h1></h1>
                <p>{props.id}</p>
                {checkList.map((item, index)=>{
                   return (
                       <>
                       <input type="checkbox" name={item[1]} id="" />
                       <label>{item.medicine} : {item.time}</label>
                       <p>{item.description}</p>
                       <br></br>
                       </>
                       ) 
                       
                    })}
                    <button onClick={editModeSwitch}>Enable Edit Mode</button>
            </div>
        ) : (
            <>
            <ChildForm entries={checkList} edit={true} child={props.match.params.id} setChecklist={setCheckList} checkList={checkList}></ChildForm>
            <button onClick={editModeSwitch}>Disable Edit Mode</button>
            </>
            )
        }
        
        </>
    )
}

export default ShowChild

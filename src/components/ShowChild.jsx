import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { stateContext } from "../stateReducer"
import ChildForm from "./ChildForm"
const ShowChild = (props) => {
    const context = useContext(stateContext)
    const [checkList, setCheckList] = useState([])
    const [editMode, setEditMode] = useState(true)
    const [updateSwitch, flickSwitch] = useState(false)
    const {token } = context
    async function fetchChild() {
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/children/${props.match.params.id}`,{ headers: {
            Authorization: `Bearer ${token}`
          }})
        const data = await res.json()
        setCheckList(data)
    }
    useEffect(() => {
        fetchChild()
    },[updateSwitch])
    function editModeSwitch () {
        editMode ? setEditMode(false) :setEditMode(true)
    }
    function updatingChecked(e){
        const itemToUpdate = checkList.find(entry =>{
            return entry.medicine = e.target.name
        })
        if(itemToUpdate.complete === true) {
            itemToUpdate.complete = false 
        } else {
            itemToUpdate.complete = true
        } 
        async function updateCompleteStatus() {
            const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}checklist_entries/${e.target.value}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(itemToUpdate)
            })
            fetchChild()
        }
        updateCompleteStatus()
        flickSwitch(false)
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
                       <input type="checkbox"name={item.medicine} checked={item.complete} onChange={updatingChecked} value={item.id}/>
                       <label>{item.id}:{item.medicine} : {item.time}</label>
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
        <Link to={`/child/${props.match.params.id}/rewards`}>Rewards</Link>
        
        </>
    )
}

export default ShowChild

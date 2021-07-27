import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { stateContext } from "../stateReducer"
import ChildForm from "./ChildForm"
import { CheckListBox } from "./StylingComponents/StyledComponents"
const ShowChild = (props) => {
    const context = useContext(stateContext)
    const [checkList, setCheckList] = useState([])
    const [editMode, setEditMode] = useState(true)
    const [updateSwitch, flickSwitch] = useState(false)
    const {token } = context
    async function fetchChild() {
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}children/entries/${props.id}`,{ headers: {
            Authorization: `Bearer ${token}`
          }})
        const data = await res.json()
        console.log(data)
        setCheckList(data)
        console.log(checkList)
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
            <>
                {checkList.length > 1 ? checkList.map((item, index)=>{
                   return (
                       <CheckListBox>
                       <input type="checkbox"name={item.medicine} checked={item.complete} onChange={updatingChecked} value={item.checklist_entry_id}/>
                       <label>{item.medicine} : {item.time}</label>
                       <p> {item.description}</p>
                       <br></br>
                       </CheckListBox>
                       ) 
                       
                    }) : <CheckListBox>
                        <input type="checkbox"name={checkList.medicine} checked={checkList.complete} onChange={updatingChecked} value={checkList.id}/>
                       <p>{checkList.medicine} : {checkList.time}</p>
                       <p> {checkList.description}</p>
                       <p>{checkList.description}</p>
                       <br></br>
                    </CheckListBox>
                    }
                    <button onClick={editModeSwitch}>Enable Edit Mode</button>
            </>
        ) : (
            <>
            <ChildForm entries={checkList} edit={true} child={props.id} setChecklist={setCheckList} checkList={checkList}></ChildForm>
            <button onClick={editModeSwitch}>Disable Edit Mode</button>
            </>
            )
        }
        <Link to={`/child/${props.id}/rewards`}>Rewards</Link>
        
        </>
    )
}

export default ShowChild

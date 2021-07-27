// import MedicineCheckList from "./MedicineCheckList"

import { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { stateContext } from "../stateReducer"
import { EditFormBox } from "./StylingComponents/StyledComponents"
const ChildForm = (props) => {
    const context = useContext(stateContext)
    const {token} = context
    const initial = props.entries === undefined ? [] : props.entries
    const [formMeds, setFormMeds] = useState(initial)
    const [name, setName] = useState('Test')
    const [time, setTime] = useState()
    const {filteredMedicine, dispatch} = context
    const history = useHistory()

    function addChild(e) {
        e.preventDefault()
        async function sendChildtoApi () {
           
            const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}children`, {method: 'POST', headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json'
            }, body: JSON.stringify({name: name, formMeds: formMeds})})
            const data = await res.json()
            dispatch({
                type: 'updateChildren',
                data: {name: name, id: data.id, user_iod: data.user_id}
            })
    
        }
        async function updateChild() {
            const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}children/${props.child}`, {method: 'PATCH', headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json'
            }, body: JSON.stringify({name: name, formMeds: formMeds})})
        }
        if(props.edit === true) {
            updateChild()
            props.setChecklist([...formMeds])
        } else {
            sendChildtoApi()
            history.push('/')
        }
        

    }
    function findMedicine(e){
        if(e.target.value.length !== 0) {
            dispatch({
                type: 'filterMedicineList',
                filterValue: e.target.value
            }) 
        } else {
        
            dispatch({
                type: 'filterMedicineList', 
                filterValue: null
            })
        }

        
    }
    function addToMedicine(medicine){
        medicine.preventDefault()
        setFormMeds([...formMeds, {medicine: medicine.target.value, time: time}])
    }
    function addTime(e) {
        setTime(e.target.value)
    }
    function addName(e) {
        setName(e.target.value)
    }
    function removeMedicine(e) {
        const newList = formMeds.filter((item) => {
            return item.medicine != e.target.value
        })
        setFormMeds(newList)
    }
    return (
        <EditFormBox>
            <form onSubmit={addChild} value={{name: name, formMeds: formMeds}}>
                <input type="text" name="" id="child-name" placeholder='Name' onChange={addName}/>
                <button type="submit" id='child-submit' >Submit</button>
            </form>
                <input type="text" name="" id="checklist-medicine" placeholder='Medicine' onChange={findMedicine}/>
                {filteredMedicine.length > 0 ? filteredMedicine.map((item, index) => {
                    return (
                        <>
                        <form key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <input type="time" name="" id='date' onChange={addTime} />
                            <button  value={item.name} onClick={addToMedicine} id='add'>Add</button>
                        </form>
                        </>
                    ) 
                }) : 
                <>
                    <h3>No Medications Match that name <Link to='/medicine/add'>add New Medication?</Link> </h3>
                </>
                }
            <div id='preview'>
            <p>{name}</p>
            {formMeds.map((item, index) => {
                return (
                    <>
                    <p>{item.medicine} : {item.time} </p>
                    <button value={item.medicine} onClick={removeMedicine}>Delete</button>
                    </>
                )
            }
            )}
            </div>

        </EditFormBox>
    )
}

export default ChildForm

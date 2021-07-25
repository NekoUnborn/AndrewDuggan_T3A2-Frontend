// import MedicineCheckList from "./MedicineCheckList"

import { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { stateContext } from "../stateReducer"

const ChildForm = () => {
    const context = useContext(stateContext)
    const {token} = context
    const [formMeds, setFormMeds] = useState([])
    const [name, setName] = useState('Test')
    const [time, setTime] = useState()
    const {filteredMedicine, dispatch} = context
    const history = useHistory()

    function addChild(e) {
        e.preventDefault()
        async function sendChildtoApi () {
           
            const res = await fetch('http://localhost:4000/api/v1/children', {method: 'POST', headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type' : 'application/json'
            }, body: JSON.stringify({name: name, formMeds: formMeds})})
            const data = await res.json()
            dispatch({
                type: 'updateChildren',
                data: {name: name, id: data.id, user_iod: data.user_id}
            })
    
        }
        sendChildtoApi()
        history.push('/')
        

    }
    function findMedicine(e){
        if(e.target.value.length != 0) {
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
    return (
        <div>
            <h1> Child Form</h1>
            <form onSubmit={addChild} value={{name: name, formMeds: formMeds}}>
                <input type="text" name="" id="" placeholder='Name' onChange={addName}/>
                <button type="submit" >Submit</button>
            </form>
                <input type="text" name="" id="" placeholder='Medicine' onChange={findMedicine}/>
                {filteredMedicine.length > 0 ? filteredMedicine.map((item, index) => {
                    return (
                        <>
                        <form key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <input type="time" name="" id="" onChange={addTime} />
                            <button  value={item.name} onClick={addToMedicine}>Add</button>
                        </form>
                        </>
                    ) 
                }) : 
                <>
                    <h3>No Medications Match that name <Link to='/medicine/add'>add New Medication?</Link> </h3>
                </>
                }
            <p>{name}</p>
            {formMeds.map((item, index) => {
                return (
                    <p>{item.medicine} : {item.time} </p>
                )
            }
            )}

        </div>
    )
}

export default ChildForm

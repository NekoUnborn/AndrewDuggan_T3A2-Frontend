// import MedicineCheckList from "./MedicineCheckList"

import { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { stateContext } from "../stateReducer"

const ChildForm = () => {
    const context = useContext(stateContext)
    const {token} = context
    const [formMeds, setFormMeds] = useState([])
    const [name, setName] = useState('Test')
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
        console.log(medicine.target.value)
        setFormMeds([...formMeds, medicine.target.value])
    }
    function addName(e) {
        console.log(e.target.value)
        setName(e.target.value)
    }
    return (
        <div>
            <h1> Child Form</h1>
            <form onSubmit={addChild} value={{name: name, formMeds: formMeds}}>
                <input type="text" name="" id="" placeholder='Name' onKeyUp={addName}/>
                <button type="submit" >Submit</button>
            </form>
                <input type="text" name="" id="" placeholder='Medicine' onKeyUp={findMedicine}/>
                {filteredMedicine.length > 0 ? filteredMedicine.map((item, index) => {
                    return (
                        <>
                        <div key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <button  value={item.name} onClick={addToMedicine}>Add</button>
                        </div>
                        </>
                    ) 
                }) : 
                <>
                    <h3>No Medications Match that name <Link to='/medicine/add'>add New Medication?</Link> </h3>
                </>
                }
            <p>{name}</p>
            <p>{formMeds}</p>


        </div>
    )
}

export default ChildForm

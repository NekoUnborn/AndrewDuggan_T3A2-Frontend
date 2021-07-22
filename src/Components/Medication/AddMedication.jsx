import { useHistory } from "react-router"
import { useState, useReducer } from "react"
import medicineReducer from "./medicineStateReducer"

const AddMedication = (props) => {
    
    let history = useHistory()
    
    function submit(e){
        async function addMedicine(data) {
            const res = await fetch('http://localhost:4000/api/v1/medicines', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(data)
            })
        }
        e.preventDefault()
        const data = {
            name: e.target.elements.medicine.value,
            description: e.target.elements.description.value
        }
        addMedicine(data)
        const update = []
        update.push(data.name)
        update.push(data.description)
        props.updateMedicine(update)
        
        // set the message on the home page to be the result messgae etc using state etc. 
        history.push('/medicine')
    }
    return (
        <div>
            <h2>Add Medication</h2>
            {prompt}
            <form onSubmit={submit}>  
                <label>Name: </label>
                <input type='text' name='medicine' id='name'></input>
                <label>Description</label>
                <br></br>
                <textarea type='text' name='description' id='description'></textarea>
                <br></br>
                <button type="submit" id='submit'>Add Medication</button>
            </form>
        </div>
    )
}

export default AddMedication

import { useHistory } from "react-router"
import { useState } from "react"

const AddMedication = (props) => {
    const [prompt, setPrompt] = useState(null)
    let history = useHistory()
    async function addMedicine(data){
        const res = await fetch('http://localhost:4000/api/v1/medicines', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({name: data.name, description: data.description})})
        const message = await res.json()
        setPrompt(message.message)
        
    }
    function submit(e){
        e.preventDefault()
        const data = {
            name: e.target.elements.medicine.value,
            description: e.target.elements.description.value
        }
        addMedicine(data)
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

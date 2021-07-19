const AddMedication = (data) => {
    async function addMedicine(){
        const res = await fetch('http://localhost:4000/api/v1/medicines', {method: 'POST', body: data})
    }
    function submit(e){
        e.preventDefault()
        const data = {
            name: e.target.elements.medicine.value,
            description: e.target.elements.description.value
        }
        addMedicine(data)
        console.log('Completed Request')
    }
    return (
        <div>
            <h1> Made it here</h1>
            <form onSubmit={submit}>  
                <label>Name: </label>
                <input type='text' name='medicine'></input>
                <label>Description</label>
                <br></br>
                <textarea type='text' name='description'></textarea>
                <br></br>
                <button type="submit" >Add Medication</button>
            </form>
        </div>
    )
}

export default AddMedication

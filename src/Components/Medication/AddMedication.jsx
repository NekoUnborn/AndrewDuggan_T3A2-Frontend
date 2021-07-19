const AddMedication = () => {
    return (
        <div>
            <h1> Made it here</h1>
            <form>
                <label>Name: </label>
                <input type='text'></input>
                <label>Description</label>
                <br></br>
                <textarea type='text'></textarea>
                <br></br>
                <button type="submit" onSubmit={console.log('Submitted the form')}>Add Medication</button>
            </form>
        </div>
    )
}

export default AddMedication

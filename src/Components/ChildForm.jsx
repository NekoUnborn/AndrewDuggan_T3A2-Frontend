// import MedicineCheckList from "./MedicineCheckList"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { stateContext } from "../stateReducer"

const ChildForm = () => {
    const context = useContext(stateContext)
    const {filteredMedicine, dispatch} = context
    function addChild(e) {
        e.preventDefault()
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
    return (
        <div>
            <h1> Child Form</h1>
            <form onSubmit={addChild}>
                <input type="text" name="" id="" placeholder='Name'/>
                <button type="submit">Submit</button>
            </form>
                <input type="text" name="" id="" placeholder='Medicine' onKeyPress={findMedicine}/>
                {filteredMedicine.length > 0 ? filteredMedicine.map((item, index) => {
                    return (
                        <>
                        <div key={index}>
                            <h3>{item[0]}</h3>
                            <p>{item[1]}</p>
                            <button>Add</button>
                        </div>
                        </>
                    ) 
                }) : 
                <>
                    <h3>No Medications Match that name <Link to='/medicine/add'>add New Medication?</Link> </h3>
                </>
                }


        </div>
    )
}

export default ChildForm

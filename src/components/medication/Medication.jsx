import { useContext} from 'react'
import { Button, Text, MedicationList } from '../StylingComponents/StyledComponents'
import { Link } from "react-router-dom"
import { stateContext } from "../../stateReducer"
import Box from './Box'


const Medication = () => {
    const { medicine, dispatch, filteredMedicine, message}= useContext(stateContext)
    console.log(message)
    function filter (e) {
        dispatch({
            type: 'filterMedicineList',
            filterValue: e.target.value
        })
        console.log(filteredMedicine)
    }
    return (
        <>
        <h3>
            {message}
        </h3>
        <input type='text' onKeyPress={filter} placeholder='Filter' id='filter'></input>
        <MedicationList>
            {filteredMedicine && filteredMedicine.length > 0 ? filteredMedicine.map((item, index) =>{
                return (
                    <Box key={index} name={item.name} description={item.description}/>
                )
                }) : medicine.map((item, index) =>{
                return (
                <Box key={index} name={item[0]} description={item[1]} />
            )})}
        <Link id='addmed' to='/medicine/add'><Button><Text>Add Medicine</Text></Button></Link>
        </MedicationList>
        </>
    )
    }

export default Medication

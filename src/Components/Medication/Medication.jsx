import { useEffect, useReducer } from "react"
import Box from "./Box"
import styled from "styled-components"
import { Link } from "react-router-dom"
import medicineReducer from "./medicineStateReducer"
const MedicationList = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`

const Medication = (props) => {
    const {medicine}  = props
    // setList([...medicine])
    // const filter = (e) =>{
    //     let filtered = list.filter((item)=> item[0].includes(e.target.value))
    //     // console.log(filtered)
    //     setList(filtered)
    // }
    return (
        <>
        <input type='text'></input>
        <MedicationList>
            {medicine.map((item, index) =>{
                return (
                <Box key={index} name={item[0]} description={item[1]} />
            )})}
        </MedicationList>
        <Link to='/medicine/add'>Add a Medicine</Link>
        </>
    )
    }

export default Medication

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
    background-color: pink;
    height: 700px;
    overflow: scroll;
    padding: 10px;
`
const Text = styled.p`
    text-decoration: none;
    color: black;
    text-align: center;
`
const Button = styled.button`
    margin-left: 40%;
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
        <Link to='/medicine/add'><Button><Text>Add Medicine</Text></Button></Link>
        </>
    )
    }

export default Medication

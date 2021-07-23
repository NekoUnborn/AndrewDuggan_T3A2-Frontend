import { useEffect, useReducer, useContext} from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { stateContext } from "../../stateReducer"
import Box from './Box'
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

const Medication = () => {
    const { medicine, dispatch, filteredMedicine}= useContext(stateContext)

    function filter (e) {
        dispatch({
            type: 'filterMedicineList',
            filterValue: e.target.value
        })
    }

    // setList([...medicine])
    // const filter = (e) =>{
    //     let filtered = list.filter((item)=> item[0].includes(e.target.value))
    //     // console.log(filtered)
    //     setList(filtered)
    // }
    return (
        <>
        <input type='text' onKeyPress={filter}></input>
        <MedicationList>
            {filteredMedicine && filteredMedicine.length > 0 ? filteredMedicine.map((item, index) =>{
                return (
                    <Box key={index} name={item[0]} description={item[1]}/>
                )
                }) : medicine.map((item, index) =>{
                return (
                <Box key={index} name={item[0]} description={item[1]} />
            )})}
        </MedicationList>
        <Link to='/medicine/add'><Button><Text>Add Medicine</Text></Button></Link>
        </>
    )
    }

export default Medication

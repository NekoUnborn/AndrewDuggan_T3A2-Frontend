import { useState, useEffect } from "react"
import Box from "./Box"
import styled from "styled-components"
import { Link } from "react-router-dom"
const MedicationList = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`

const Medication = () => {
    const [list, setList] = useState([])
    
    async function fetchList(){ // Fetches List and converts data to json, and pushes the pulled data to the state List
        const res = await fetch('http://127.0.0.1:4000/api/v1/medicines')
        const data = await res.json()
        const medicine = []
        for(let item of data){
            medicine.push(item)
        }
        setList([...medicine])
    }

    useEffect(() =>{
        fetchList() //Calls the FetchList function to create the list entries of all the medication
    }, [])
    return (
        <>
        <MedicationList>
            {list.map((item, index) =>{
                return (
                    <>
                        <Box key={index} name={item[0]} description={item[1]} showDesc={false} />
                    </>
            )
            })}
        </MedicationList>
        <Link to='/medicine/add'>Add a Medicine</Link>
        </>
    )
    }

export default Medication

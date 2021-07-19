import { useState } from "react"
import Box from "./Box"
import styled from "styled-components"
import { Link } from "react-router-dom"
const MedicationList = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`
const LogoHeading = styled.h1`
    text-align: center;
    color: blue;
`

const Medication = () => {
    const [list, setList] = useState([])
    async function fetchList(){
        const res = await fetch('http://127.0.0.1:4000/api/v1/medicines')
        const data = await res.json()
        const medicine = []
        for(let item of data){
            medicine.push(item)
        }
        setList([...list, ...medicine])
    }
    
    return (
        <>
        <LogoHeading>MediTrack</LogoHeading>
           <button onClick={fetchList}>Test</button>
        <MedicationList>
            {list.map((item, index) =>{
                return <Box key={index} name={item[0]} description={item[1]}></Box>
            })}
        </MedicationList>
        <Link to='/medication/add'>Add a Medicine</Link>
        </>
    )
    }

export default Medication

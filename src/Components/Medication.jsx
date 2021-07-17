import { useState } from "react"
const Medication = () => {
    const [list, setList] = useState([])
    async function fetchList(){
        const res = await fetch('http://127.0.0.1:4000/api/v1/medicines')
        const data = await res.json()
        const temp = []
        for(let medicine of data){
            temp.push(medicine)
        }
        setList([...list, ...temp])
    }
    
    return (
        <div>
           <button onClick={fetchList}>Test</button>
           <p>{list}</p>
        </div>
    )
    }

export default Medication

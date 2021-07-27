import { useContext, useState, useEffect } from "react";
import { stateContext } from "../stateReducer";
import { MedBox } from "./StylingComponents/StyledComponents";
import { Link } from "react-router-dom";
import Tabs from "./StylingComponents/Tabs.jsx"
import ShowChild from "./ShowChild";

export default function Child(props) {
    const {children, token, dispatch} = useContext(stateContext)
    const [tabs, setTabs] = useState([''])
    async function deleteChild(e){
        const {value} = e.target
        const res = fetch(`${process.env.REACT_APP_API_ENDPOINT}children/${value}`, {method: 'DELETE', headers: {
            Authorization: `Bearer ${token}`,
        }})
        dispatch({
            type: 'removeChild',
            data: {id: value}
        })
    }
    console.log(children)
    return (
        <MedBox>
        <h1>Children</h1>
            {children.map((child,index)=>{
            return (
                <div label={child.name}>
                        <h3>{child.name}</h3>
                        <ShowChild id={child.id}></ShowChild>
                    <button onClick={deleteChild} value={child.id}>Delete</button>
                    <br></br>
                </div>
            )
        })}

            
        <Link to='/child/add'><button>Add</button></Link>
        </MedBox>
    )
}
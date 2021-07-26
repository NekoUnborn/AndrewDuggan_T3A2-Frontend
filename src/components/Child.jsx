import { useContext, useState } from "react";
import { stateContext } from "../stateReducer";
import styled from "styled-components"
import { Link } from "react-router-dom";
const MedBox = styled.div`
    flex-basis: 48%;
    background-color: whitesmoke;
    height: auto;
    text-align:center;
    border: black solid 2px;
    display:flex;
    box-sizing: border-box;
`
export default function Child(props) {
    const {children, token, dispatch} = useContext(stateContext)
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
    return (
        <MedBox>
        <h1>Children</h1>
        
        {children.map((child,index)=>{
            return (
                <div>
            <Link to={`/child/${child.id}`}>
            <h3>{child.name}</h3>
            </Link>
            <button onClick={deleteChild} value={child.id}>Delete</button>
            <br></br>
            {/* <ShowChild id={child.id}></ShowChild> */}
            </div>
            )
        })}
        <Link to='/child/add'>
        <button>Add</button>
        </Link>
        </MedBox>
    )
}
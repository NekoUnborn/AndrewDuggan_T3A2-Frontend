import { useContext, useState } from "react";
import { stateContext } from "../stateReducer";
import ShowChild from "./ShowChild";
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
    const {children } = useContext(stateContext)
    return (
        <MedBox>
        <h1>Children</h1>
        
        {children.map((child,index)=>{
            return (
                <div>
            <h3>{child.name}</h3>
            <br></br>
            <ShowChild id={child.id}></ShowChild>
            </div>
            )
        })}
        <Link to='/child/add'>
        <button>Add</button>
        </Link>
        </MedBox>
    )
}
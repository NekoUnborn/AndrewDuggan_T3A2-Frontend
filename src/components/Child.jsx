import { useContext, useState } from "react";
import { stateContext } from "../stateReducer";
import { Link } from "react-router-dom"
import styled from "styled-components"
const MedBox = styled.div`
    flex-basis: 48%;
    background-color: whitesmoke;
    height: 200px;
    text-align:center;
    border: black solid 2px;
    box-sizing: border-box;
`
export default function Child(props) {
    const {children } = useContext(stateContext)
    return (
        <MedBox>
        <h1>Children</h1>
        {children.map((child,index)=>{
            return (
            <Link key={index} to={`/child/${child.id}`}><h3 key={index}>{child.name}</h3></Link>
            )
        })}
        </MedBox>
    )
}
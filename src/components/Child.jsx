import { useContext, useState } from "react";
import { stateContext } from "../stateReducer";
import { Link } from "react-router-dom"
import Box from "./Medication/Box";
export default function Child(props) {
    return (
        <>
        <h1>Children</h1>
        {props.children.map((child,index)=>{
            return (
            <Link to={`/child/${child[1]}`}><h3 key={index}>{child[0]}</h3></Link>
            )
        })}
        </>
    )
}
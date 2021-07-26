import styled from "styled-components"
const MedBox = styled.div`
    flex-basis: 48%;
    background-color: whitesmoke;
    height: 200px;
    text-align:center;
    border: black solid 2px;
    box-sizing: border-box;
`
const Box = (props) => {
    return (
        <MedBox>
        <h3>{props.name}</h3>
        <br></br>
        {props.description}
        </MedBox>
    )
}

export default Box


// To Do List: 
// Find a way to manipulate the dom or react state to show the description when tapped or hovered over.
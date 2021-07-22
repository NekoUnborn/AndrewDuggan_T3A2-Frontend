import styled from "styled-components"
const MedBox = styled.div`
    flex-basis: 50%;
    text-align:center;
    border: black solid 2px;
    box-sizing: border-box;
`
const Box = (props) => {
    return (
        <MedBox>
        <li>{props.name}</li>
        <br></br>
        {props.description}
        </MedBox>
    )
}

export default Box


// To Do List: 
// Find a way to manipulate the dom or react state to show the description when tapped or hovered over.
import { MedBox } from "../StylingComponents/StyledComponents"

const Box = (props) => {
    return (
        <MedBox>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </MedBox>
    )
}

export default Box


// To Do List: 
// Find a way to manipulate the dom or react state to show the description when tapped or hovered over.
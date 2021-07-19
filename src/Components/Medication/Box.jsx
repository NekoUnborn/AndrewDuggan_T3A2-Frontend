const Box = (props) => {
    const showDesc = false
    return (
        <>
        {showDesc ? <p>{props.description}</p> : <p> {props.name}</p>}
        </>
    )
}

export default Box


// To Do List: 
// Find a way to manipulate the dom or react state to show the description when tapped or hovered over.
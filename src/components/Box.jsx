import { useState } from "react"
import ShowChild from "./ShowChild"
const Box = (props) => {
    const [checkListShown, setCheckListShown] = useState(true)
    const {child} = props
    function toggleCheckList() {
        checkListShown ? setCheckListShown(false) :setCheckListShown(true)
    }
    return (
        <>
            {checkListShown? (
                <>
                <h3>{child.name}</h3> <button onClick={toggleCheckList}>Show</button>
                </>
            ): (
                <>
                <h3>{child.name}</h3><button onClick={toggleCheckList}>Hide</button>
                <ShowChild id={child.id}></ShowChild>
                </>
            )}
            
            </>
    )
}

export default Box

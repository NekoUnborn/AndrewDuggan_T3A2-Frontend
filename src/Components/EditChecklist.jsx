import { stateContext } from "../stateReducer"
import { useContext } from "react"
import { useHistory } from "react-router"

const EditChecklist = (props) => {
    const context = useContext(stateContext)
    const history = useHistory()
    const {checkListEntries, medicine, dispatch} = context
    console.log(medicine)
    console.log(checkListEntries)
    let updatedList = []
    function inChecklist (item){
        let checked = false
        for(let entry of checkListEntries){
            if(entry[1] == item[0]){
                checked = true
            } else {
            }
        }
        return checked
    }
    function updateCheckList(e){
        async function updateEntries () {
            // const res = await fetch(http://localhost:4000/')
        }
        e.preventDefault()
        updatedList = []
        const {children} = e.target
        for(let child of children){
            if(child.tagName == 'INPUT' && child.checked == true){
                updatedList.push(child.value)
            }
        }
        
        dispatch({
            type: 'setChecklistEntries', 
            data: updatedList
        })
        history.push(`/child/${props.match.params.id}`)

    }
    return (
        <div>
            <h1>  Test</h1>
            <form onSubmit={updateCheckList}>
                {medicine.map((item, index)=>{
                    return (
                        <>
                        <input type="checkbox" defaultChecked={inChecklist(item)} key={item[1]} value={item[0]} id=""/><label>{item[0]}</label>
                        <br></br>
                        </>
                    )
                })}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditChecklist

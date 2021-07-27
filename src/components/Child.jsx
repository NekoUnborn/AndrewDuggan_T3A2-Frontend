import { useContext} from "react";
import { stateContext } from "../stateReducer";
import { MedBox } from "./StylingComponents/StyledComponents";
import { Link } from "react-router-dom";
import Tabs from "./StylingComponents/Tabs.jsx"
import ShowChild from "./ShowChild";
import Medication from "./medication/Medication";
import { ChildTab } from "./StylingComponents/StyledComponents";
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
        const data = await res.json()
    }
    console.log(children)
    return (
        <MedBox>
        <Tabs>
            <div label='CheckLists'>
            <Link to='/child/add'><button>Add</button></Link>
                <ChildTab>
            {children.map((child,index)=>{
                return (
                <div style={{flexBasis: '49%', 
                width: '20%', 
                border: '2px solid black', overflow: 'scroll', height: '300px'}}>
                        <h3>{child.name}</h3><input type="checkbox" name="" id="" />
                        <ShowChild id={child.id} ></ShowChild>
                    <button onClick={deleteChild} value={child.id}>Delete</button>
                    <br></br>
                </div>
            )
        })}   
                </ChildTab>
            </div>
            <div label='Medicine'>
                <Medication></Medication>
            </div>
        </Tabs>

            

        </MedBox>
    )
}
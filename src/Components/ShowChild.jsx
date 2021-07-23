import { useContext } from "react"
import { stateContext } from "../stateReducer"
const ShowChild = (props) => {
    const context = useContext(stateContext)
    async function fetchChild() {
        const res = await fetch(`http://localhost:4000/api/v1/children/${props.match.params.id}`,{ headers: {
            Authorization: `Bearer ${context.token}`
          }})
        const data = await res.json()
        console.log(data)
    }
    fetchChild()
    return (
        <div>
            <p>{props.match.params.id}</p>
        </div>
    )
}

export default ShowChild

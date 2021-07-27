import { useState, useContext, useEffect } from "react"
import { stateContext } from "../../stateReducer"
const Rewards = (props) => {
    const id = props.match.params.id
    const context = useContext(stateContext)
    console.log(id)
    const [rewards, setRewards] = useState()
    async function getRewards () {
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}child/${id}/rewards`, {
            headers: {
            Authorization: `Bearer ${context.token}`
          }})
          const data = await res.json()
          console.log(data)
          setRewards(data)
    }
    useEffect(() =>{
        getRewards()
    }, [])
    return (
        <div>
            <h1>Rewards</h1>
            <h1>{id}</h1>
            {rewards ? rewards.map((reward, index) => {
                return (
                <p key={index}>{reward.date}</p>
                )
            }) : <p>Nothinjg here</p>}
        </div>
    )
}

export default Rewards

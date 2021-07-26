import { useContext, useState } from "react";
import { stateContext } from "../../stateReducer";

export default function Signup(props) {
  const [errorMessage, setErrorMessage] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const { dispatch } = useContext(stateContext);

  const submit = async (event) => {
    event.preventDefault();
    const user = { username, email, password, pin };
    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}users/signup`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status === 200) {
      dispatch({
        type: "setToken",
        data,
      });
    } else {
      setErrorMessage(data.error);
    }
  };

  return (
    <>
      {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}
      <form onSubmit={submit}>
        <div>
          <label>Username: </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <label>Email: </label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <label>PIN: </label>
          <input
            type="integer"
            onChange={(e) => setPin(e.target.value)}
            value={pin}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

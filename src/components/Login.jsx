import { useContext, useState } from "react";
import { stateContext } from "../stateReducer";
import { BrowserRouter, Link} from "react-router-dom";

export default function Login(props) {
  const [errorMessage, setErrorMessage] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(stateContext);

  const submit = async (event) => {
    event.preventDefault();
    const user = { username, password };
    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}`users/login, {
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
      <h1>Login</h1>
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
          <label>Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <BrowserRouter>
      <p><Link to="/Signup">Signup</Link></p>
      </BrowserRouter>
    </>
  );
}

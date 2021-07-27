import { useContext, useState } from "react";
import { stateContext } from "../../stateReducer";
import { BrowserRouter, Link} from "react-router-dom";
import { CredentialForm, CredentialItem } from "../StylingComponents/StyledComponents";

export default function Login(props) {
  const [errorMessage, setErrorMessage] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(stateContext);
  console.log(process.env.REACT_APP_API_ENDPOINT_DEV)
  const submit = async (event) => {
    event.preventDefault();
    const user = { username, password };
    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}users/login`, {
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
      <CredentialForm onSubmit={submit}>
        <CredentialItem>
          <label>Username: </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username} id='username' placeholder='Username'
          />
        </CredentialItem>
        <CredentialItem>
          <label>Password: </label>
          <input
            type="password" id='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password} placeholder='Password'
          />
        </CredentialItem>
        <button type="submit" id='submit'>Login</button>
      </CredentialForm>
    </>
  );
}

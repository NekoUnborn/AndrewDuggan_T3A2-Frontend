import Tabs from "../StylingComponents/Tabs";
import "./Credentials.css";
import Login from "./Login"
import Signup from "./Signup"

export default function Credentials(props) {
  return (
    <>
      <Tabs> 
       <div label="Login" > 
         <Login /> 
       </div> 
       <div label="Signup"> 
         <Signup />
       </div> 
     </Tabs>
    </>
  );
}

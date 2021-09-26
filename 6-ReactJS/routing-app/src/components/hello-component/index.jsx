import React, { useContext } from "react";
import { AuthContext } from "../../authentication";
import { HelloContext } from "../../hello-context";

const HelloComponent = (props) => {
  const helloMsg = useContext(HelloContext);
  const auth = useContext(AuthContext);
  return (
    <React.Fragment>
       {props.children}
      <h1>{helloMsg()}</h1>
      <p>is logged: {new Boolean(auth.authValue.isLogged).toString()}</p>
      <button onClick={() => auth.changeAuth({isLogged:true})}>Login</button>
    </React.Fragment>
  );
};

export default HelloComponent;

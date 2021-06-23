
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { useState,useEffect} from "react";
import { useHistory } from "react-router";
import { useAuth } from "./Auth";
import HomePage from "./HomePage";
import Info from "./Info"
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] =useState("");
  const [errorPassword, setErrorPassword] =useState("");
  const history = useHistory();
  const { user, setUser } = useAuth();
  function loginHandler() {
    if(password.length==0&&username.length==0)
    {
      setErrorPassword("Enter Password!")
      setErrorUsername("Enter Username!")
      return;
    }
    if(password.length==0)
    {
      setErrorPassword("Enter Password!")
      return;
    }
    if(username.length==0)
    {
      setErrorUsername("Enter username")
      return;
    }
    if(!validPassword.test(password))
    {
      setErrorPassword("Enter valid Password")
      return;
    }
      fetch("https://run.mocky.io/v3/060ff158-0348-40fb-8cff-783b7aa9afc4")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem(
          "user",
          JSON.stringify({ user: data["data"], loggedIn: true })
        );
        setUser({ user: data["data"], loggedIn: true });
      //   history.push("/info");
      });
  }
  if (user["loggedIn"]) {
    return <Info/>;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary" className="ion-padding">
          <IonLabel>Login</IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel className="ion-padding">Username</IonLabel>
          <IonInput
            onIonChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
          ></IonInput>
        </IonItem>
        <IonLabel className="error1">
        {errorUsername && <IonLabel>{errorUsername}</IonLabel> }
        </IonLabel>
        <IonItem>
          <IonLabel className="ion-padding">Password</IonLabel>
          <IonInput className="error"
            onIonChange={(e) => setPassword(e.target.value)}
            type="password"
            pattern=""
          ></IonInput>
        </IonItem>
        <IonLabel  className="error1">
        {errorPassword && <IonLabel>{errorPassword}</IonLabel> }
        </IonLabel>
        <p style={{ fontSize: "small" }}>
                  By clicking LOGIN you agree to our <a href="#">Policy</a>
       </p>
       <IonButton onClick={loginHandler} className="ion-padding" type="submit">
          Login
        </IonButton>
        
        
               <p style={{ fontSize: "medium" }}>
                   Don't have an account? <a href="/register">Sign up!</a>
               </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
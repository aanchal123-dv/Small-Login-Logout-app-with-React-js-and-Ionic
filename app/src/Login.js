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
  import { useState } from "react";
  import { useHistory } from "react-router";
  import { useAuth } from "./Auth";
  import HomePage from "./HomePage";
  import Info from "./Info"
  
  const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { user, setUser } = useAuth();
  
    function loginHandler() {
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
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel className="ion-padding">Password</IonLabel>
            <IonInput
              onIonChange={(e) => setPassword(e.target.value)}
              type="password"
            ></IonInput>
          </IonItem>
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






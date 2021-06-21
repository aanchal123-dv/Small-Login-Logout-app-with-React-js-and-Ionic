import React, { useState,useEffect } from 'react'
import { IonHeader, IonToolbar, IonTitle, IonIcon, IonItem, IonLabel, IonInput, IonRow, IonCol, IonButton, IonPage, IonContent } from '@ionic/react';
import { home as homeIcon, logIn as loginIcon } from "ionicons/icons";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
function Register() {
    const [inputField, setInputField] = useState({
        name: '',
        email: ' ',
        pwd: ' '
    })

    
   
   
    const history = useHistory();
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        history.push("/login");
    }
    return (
        <div>
            <IonPage>

                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Login</IonTitle>
                    </IonToolbar >
                </IonHeader>
                <IonContent>
                    {/* <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={loginIcon}
                        size="small"
                    /> */}
                    <IonItem>
                        <IonLabel className="ion-padding" position="floating" required  >Name</IonLabel>
                        <IonInput
                            type="text"
                            name="name"
                            value={inputField.name}
                            onIonChange={handleChange}
                        >
                        </IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel className="ion-padding" position="floating" required onIonChange={handleChange}> Email</IonLabel>
                        <IonInput
                            type="email"
                            name="email"
                            placeholder="Enter your mail"
                            value={inputField.email}
                        >
                        </IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel className="ion-padding" position="floating" required onIonChange={handleChange}>password</IonLabel>
                        <IonInput
                            className="ion-padding" position="floating"
                            type="password"
                            name="pwd"
                            placeholder="Enter your password"
                            value={inputField.password}
                        >
                        </IonInput>
                    </IonItem>


                    <p style={{ fontSize: "small" }}>
                        By clicking LOGIN you agree to our <a href="#">Policy</a>
                    </p>
                    <IonButton expand="block" onClick={handleSubmit}>
                        Register
                    </IonButton>
                    <p style={{ fontSize: "medium" }}>
                        Already have an account? <a href="/Login">Login</a>
                    </p>

                </IonContent>
            </IonPage>

        </div>
    )
}

export default Register

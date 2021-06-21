import React from 'react'
import '../src/HomePage.css'
import { useHistory } from 'react-router';
import { IonButton } from '@ionic/react';
function HomePage() {
    const history = useHistory();
    const handleSubmit = (e) => {
        window.localStorage.clear();
        history.push("/");
    }
    return (
        <div>
            <img class="center"src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            <h1 align="center">This Dog loves you</h1>

            <img class="center"src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            <h1 align="center">This Dog loves you</h1>

            <img class="center"src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            <h1 align="center">This Dog loves you</h1>

            <IonButton expand="block" onClick={handleSubmit}>
                    Logout
                </IonButton>
        </div>
    )
}

export default HomePage

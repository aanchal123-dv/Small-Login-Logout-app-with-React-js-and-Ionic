import React from 'react'
import { IonPage, IonContent, IonButton, IonFooter, IonToolbar, IonLabel,IonItem,IonHeader } from '@ionic/react'
function Home() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonLabel class="ion-text-center">Header</IonLabel>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    
                <IonButton href="/login">Login</IonButton>
                </IonItem>

                <IonItem>
                <IonButton href="/register">Register</IonButton>
                </IonItem>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonLabel>
                        footer
                    </IonLabel>
                </IonToolbar>
            </IonFooter>

        </IonPage>
    )
}

export default Home

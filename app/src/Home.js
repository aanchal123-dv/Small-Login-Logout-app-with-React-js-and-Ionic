import React from 'react'
import { IonPage, IonContent,IonCard,IonButton,IonButtons,IonTitle, IonFooter, IonToolbar, IonLabel, IonItem, IonHeader } from '@ionic/react'
import { IonIcon } from '@ionic/react'
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import "./Home.css"

function Home() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar  color="tertiary">
                    <IonLabel class="ion-text-center">Header</IonLabel>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light">
                <IonCard className="home">
               
                    <IonButton className="login" href="/login">Login</IonButton>
                    <IonButton className="register" href="/register">Register</IonButton>
                   
                </IonCard>
            </IonContent>
            <IonFooter>
            <IonToolbar color="tertiary">
                    <IonButtons slot="secondary">
                    <IonButton>
                        <IonIcon slot="icon-only" icon={personCircle} />
                    </IonButton>
                    <IonButton>
                        <IonIcon slot="icon-only" icon={search} />
                    </IonButton>
                    </IonButtons>
                    <IonButtons slot="primary">
                    <IonButton color="secondary">
                        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
                    </IonButton>
                    </IonButtons>
                    <IonTitle>LOGIN/REGISTER TO CONTINUE</IonTitle>
                </IonToolbar>
                </IonFooter>

        </IonPage>
    )
}

export default Home

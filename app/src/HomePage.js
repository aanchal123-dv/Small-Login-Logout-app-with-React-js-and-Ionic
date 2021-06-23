
import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import "./HomePage.css";
import { useHistory } from 'react-router';
import { IonButton,IonAvatar,IonLabel,IonIcon,IonContent,IonSpinner,IonItem,IonCard,IonCardTitle,IonCardHeader,IonCardSubtitle} from "@ionic/react";
import {pin} from 'ionicons/icons'
const gitHubUrl = "https://run.mocky.io/v3/0a7f0993-ef90-4697-8020-df9a3934726d";

function App() {
	
		const [userData, setUserData] = useState([]);
		const [spinner, setspinner] = useState(false);
	    const [response, updateResponse] =useState([]);
		const history = useHistory();
		
		useEffect(() =>
		{
		
			setspinner(true);
			axios(gitHubUrl).then((response) => 
			{
			
	            response=response.data;
	            console.log(response.data.posts[0].title)
				setUserData(response.data.posts)
				console.log(response.data.posts)
				setspinner(false);
	            })
		}, []);
		const handleSubmit = (e) => {
			window.localStorage.clear();
			history.push("/")
		}
		if(spinner)
		{
			return(<IonSpinner className="spinner"name="crescent" />)
			
		}
		
		else{
			return (
				<div className="App">
					 <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonButton fill="outline" slot="end">View</IonButton>
			<IonButton fill="outline" slot="end"onClick={handleSubmit}>Logout</IonButton>
          </IonItem>
					

					{userData.map((user,index)=>{
						return <IonItem  background-color="#7395ae">
							<IonCard className="card"id={index}>
							<IonCardTitle>{user.title}</IonCardTitle>
							<IonAvatar className="info-img"><img src={user.img}/></IonAvatar>
							<IonCardSubtitle>{user.subtitle}</IonCardSubtitle>
						</IonCard>
						</IonItem>
					}
					
					)}
					
				</div>
			);
		}
}

export default App;




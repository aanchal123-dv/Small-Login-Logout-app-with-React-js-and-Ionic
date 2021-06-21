
import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import { IonButton,IonAvatar,IonLabel,IonItem} from "@ionic/react";

const gitHubUrl = "https://run.mocky.io/v3/0a7f0993-ef90-4697-8020-df9a3934726d";

function App() {
	
		const [userData, setUserData] = useState({});
		const [spinner, setspinner] = useState(false);
	    const [response, updateResponse] =useState([]);
		useEffect(() =>
		{
			setspinner(true);
			axios(gitHubUrl).then((response) => 
			{
			
	            response=response.data;
	            console.log(response.data.posts[0].title)
				// const obj = { title: response.data.posts[0].title, 
	            //     image: response.data.posts[0].img, 
	            //     subtitle:response.data.posts[0].subtitle}
				setUserData(response.data.posts)
				console.log(response.data.posts)
				setspinner(false);
	            })
		}, []);
		if(spinner)
		{
			return(<h1>Load</h1>)
			
		}
		else{
			return (
				<div className="App">
					<h2>User Data</h2>
					{/* <IonAvatar className="info-img"><img src={userData.image}/></IonAvatar>
					<IonLabel>{userData.title}</IonLabel> */}
					{/* {userData.map((user)=>{
						return <IonItem>
							<img src={user.image}/>
							<IonLabel>{user.title}</IonLabel>
							<IonLabel>{user.subtitle}</IonLabel>
						</IonItem>
					}
					)} */}
				</div>
			);
		}
}

export default App;




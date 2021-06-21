import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import "./Info.css";
import { IonButton,IonAvatar} from "@ionic/react";

const gitHubUrl = "https://run.mocky.io/v3/060ff158-0348-40fb-8cff-783b7aa9afc4";

function App() {
	const [userData, setUserData] = useState({});
	const [spinner, setspinner] = useState(false);
	useEffect(() =>
	{
		setspinner(true);
		axios(gitHubUrl).then((data) => 
		{
			const obj = { name: data.data.data.name, url: data.data.data.profile_url }
			setUserData(obj)
			console.log(userData.name)
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

				<h5 className="info-item">{userData.name}</h5>

				<IonAvatar className="info-img"><img src={userData.url}/></IonAvatar>
				<IonButton href="/HomePage">Home Page</IonButton>
			</div>
		);
	}
}

export default App;
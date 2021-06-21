import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useContext, useEffect, useMemo, useState } from "react";
import { Route } from "react-router";
import { AuthContext } from "./Auth";
import HomePage from "./HomePage";
import Login from "./Login";
import Info from "./Info";
import Register from './Register';
import Home from './Home';
function App() {
  const prevUser = localStorage.getItem("user")
    ? { loggedIn: true, user: JSON.parse(localStorage.getItem("user")) }
    : { loggedIn: false, user: null };

  const [user, setUser] = useState(prevUser);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <AuthContext.Provider value={value}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/info" component={Info}/>
                <Route exact path="/HomePage" component={HomePage}/>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </AuthContext.Provider>
  );
}

export default App;







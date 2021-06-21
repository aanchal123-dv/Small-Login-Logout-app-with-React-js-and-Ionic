import React from "react"
import Logout from "../Components/Logout/Logout"
import Login from "../Components/Login/Login"
import { Route, Router, Link } from "react-router-dom"
// import Login from "../Components/Login/Login"
const Body = () => {
    return(<div><Router>
        <Route exact path="/" component={Login}> </Route>
        <Route exact path="/logout" component={Logout}> </Route>
    </Router>
        {/* <Login /> */}
    </div>)
    
}
export default Body;


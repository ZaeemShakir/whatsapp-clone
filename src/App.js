import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./Components/Chat";
import SideBar from "./Components/SideBar";
import { useState } from "react";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";

function App() {
 const [{user},dispatch]=useStateValue();

  return (
    //BEM naming convention a way to name components
    <div className="App">
      {!user ? (
       <Login/>
      ) : (
        <div className="AppBody">
          <Router>
            <SideBar />
            <Switch>
              <Route exact path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route exact path="/">
                <h1>h1</h1>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}
export default App;

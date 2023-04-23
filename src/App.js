import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./Components/Chat";
import SideBar from "./Components/SideBar";

function App() {
  return (
    //BEM naming convention a way to name components
    <div className="App">
      <div className="AppBody">
        <Router>
          <Switch>
            <SideBar />
            <Route path="/rooms/:roomId">
            <Chat />
            </Route>
            <Route path="/">
            <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;

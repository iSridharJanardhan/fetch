import React, { Component } from "react";
import Navbar from "./components/layouts/navbar.components";
import "./App.css";
import Home from "./components/layouts/index.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "./context";
import lyrics from './components/layouts/lyrics'
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path ="/lyrics/track/:id" component={lyrics}/>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

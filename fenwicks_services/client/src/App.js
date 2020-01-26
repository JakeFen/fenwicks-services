import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home"
import About from "./pages/about"
import Service from "./pages/service"
import Gallery from "./pages/gallery"
import Contact from "./pages/contact"

class App extends Component {
  render() {
    return (
      <Router>
        <div>Hello</div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;

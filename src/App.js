import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"

class App extends Component {
  state = {
    navCollapsed: false,
    activeNavPage: "home"
  }

  toggleBurger = event => {
    event.preventDefault();
    const navCollapsed = !this.state.navCollapsed
    this.setState({navCollapsed})
  }

  navRouting = event => {
    const navVal = event.currentTarget.getAttribute('value')
    this.setState({activeNavPage: navVal})
  }

  render() {
    
    const showUl = this.state.navCollapsed ? "showUl" : ""

    return (
      <Router>
        <Nav
        toggleBurger = {this.toggleBurger}
        showUl = {showUl}
        activeNavPage = {this.state.activeNavPage}
        navRouting = {this.navRouting}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;

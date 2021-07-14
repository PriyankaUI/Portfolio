import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
     <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Works" component={Work} />
        <Route exact path="/Contact" component={Contact} />
        <Home />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

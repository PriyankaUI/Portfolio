import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Work from "./components/Skills&Experience/Work";
import ParticleBackground from "./ParticleBackground";


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

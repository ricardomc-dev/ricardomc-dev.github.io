import "./App.css";
import { Switch, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

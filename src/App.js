import Footer from "./components/Footer";
import Header from "./components/Header";
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container main">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

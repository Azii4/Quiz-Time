import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className="Wrapper">
            <Link to="/about" className="about">
              About
            </Link>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/game">
                <Game />
              </Route>
              <Route path="/leaderboard">
                <Leaderboard />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Game from "./components/Game";
import Leaderboard from "./components/Leaderboard";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
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
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Main } from "./Components/Main";
import { Nav } from "./Components/Nav";
import "./Styles/Styles.css";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Layout comp={<Main />} />
          </Route>
          <Route path="/about">
            <Layout comp={<Main />} />
          </Route>
          <Route path="/work">
            <Layout comp={<Main />} />
          </Route>
          <Route path="/contact">
            <Layout comp={<Main />} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

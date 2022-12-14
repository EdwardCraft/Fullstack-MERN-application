import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;

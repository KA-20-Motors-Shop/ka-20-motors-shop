import { Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/signUpPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/login">
        <LoginPage/>
      </Route>
    </Switch>
  );
};

export default Routes;

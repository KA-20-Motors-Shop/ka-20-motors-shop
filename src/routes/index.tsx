import { Route, Switch } from "react-router-dom";
import SignUpPage from "../pages/signUpPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <SignUpPage />
      </Route>
    </Switch>
  );
};

export default Routes;

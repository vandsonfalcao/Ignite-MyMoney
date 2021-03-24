import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";
import { App } from "./App";
import { isAuthenticated } from "./auth";
import { SignIn } from "./SignIn";

function PrivateRoute({ ...rest }: RouteProps) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <App />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={SignIn} />
        <PrivateRoute path="/in" />
      </Switch>
    </BrowserRouter>
  );
};

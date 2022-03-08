import React from "react";
import Document from "./Document";
import { Route, Switch } from "react-router-dom";
import Error404 from "./Error404";

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <Switch>
          <Route
            path={[
              "/ContentWrapper",
              "/",
              "/GenresInDb",
              "/LastMovieInDb",
              "/ContentRowMovies",
            ]}
            exact={true}
            component={Document}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;

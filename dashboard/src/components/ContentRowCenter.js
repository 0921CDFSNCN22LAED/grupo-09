import React from "react";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import { Route } from "react-router-dom";

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <Route
        path={["/LastMovieInDb", "/", "/ContentWrapper"]}
        exact={true}
        component={LastMovieInDb}
      />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}

      <Route
        path={["/GenresInDb", "/", "/ContentWrapper"]}
        exact={true}
        component={GenresInDb}
      />
    </div>
  );
}

export default ContentRowCenter;

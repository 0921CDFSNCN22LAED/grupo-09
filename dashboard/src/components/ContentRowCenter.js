import React from "react";
import ConsolesInDb from "./ConsolesInDb";
import ProductsInDb from "./ProductsInDb";
import { Route } from "react-router-dom";

function ContentRowCenter() {
  return (
    <div className="row">
      {/*<!-- Last Movie in DB -->*/}
      <Route path={["/ProductsInDb", "/", "/ContentWrapper"]} exact={true} component={ProductsInDb} />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}
      <Route path={["/ConsolesInDb", "/", "/ContentWrapper"]} exact={true} component={ConsolesInDb} />
    </div>
  );
}

export default ContentRowCenter;

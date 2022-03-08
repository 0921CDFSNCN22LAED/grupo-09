import React, { useState, useEffect } from "react";
import { API_HOST } from "../constants";
import imagenFondo from "../assets/images/1646103572318_product.JPG";

function ProductsInDb() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch(`${API_HOST}/api/products/1`).then((response) =>
      response
        .json()
        .then((data) => {
          setProductList(data.data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + "rem" }} src={imagenFondo} alt=" Star Wars - Mandalorian " />
          </div>
          <p>{productList.description}</p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View movie detail
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductsInDb;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_HOST } from "../constants";
import imagenFondo from "../assets/images/1646103572318_product.JPG";

function LastProductInDb() {
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
          <h5 className="m-0 font-weight-bold text-gray-800">Último producto en la base de datos</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + "rem" }} src={imagenFondo} alt=" Star Wars - Mandalorian " />
          </div>
          <p>{productList.description}</p>
          <Link to="/LastProductInDb" exact="true" className="btn btn-danger" rel="nofollow">
            Ver detalle del producto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LastProductInDb;

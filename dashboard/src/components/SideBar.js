import React from "react";
import image from "../assets/images/Logo_solo_pirupi.jpg";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/*<!-- Sidebar - Brand -->*/}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
          <div className="sidebar-brand-icon">
            <img className="w-100" style={{ marginTop: "100px" }} src={image} alt="Pirupi" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/ContentWrapper">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Pirupi Games</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- ProductsInDb -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/ProductsInDb" exact="true">
            <i className="fas fa-fw fa-table"></i>
            ProductsInDb
          </Link>
        </li>

        {/*<!-- ConsolesInDb -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/ConsolesInDb" exact="true">
            <i className="fas fa-fw fa-table"></i>
            ConsolesInDb
          </Link>
        </li>

        {/*<!-- UsersInDb -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/UsersInDb" exact="true">
            <i className="fas fa-fw fa-table"></i>
            UsersInDb
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
    </React.Fragment>
  );
}
export default SideBar;

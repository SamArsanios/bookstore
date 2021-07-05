import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <span id="bookstore" className="navbar-brand mx-3 ">Bookstore CMS</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <span className="nav-link active px-5" aria-current="page">BOOKS</span>
          </li>
          <li className="nav-item">
            <span className="nav-link px-3">CATEGORIES</span>
          </li>
        </ul>
        <div className="d-flex">
          <i className="fa fa-user-circle-o" aria-hidden="true" />
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;

import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">fresh vally</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item ms-5">
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item ms-5">
                <a class="nav-link active" aria-current="page" href="/addEvents">AddEvents</a>
              </li>
              
              <li class="nav-item ms-5">
              <a class="nav-link active" aria-current="page" href="/login">Login</a>
            </li>
            <li class="nav-item ms-5">
              <a class="nav-link active" aria-current="page" href="/manageProducts">ManageProduct</a>
            </li>
            </ul>
            <form class="d-flex ms-5">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

import React from 'react'

const VehicleNavbar = () => {
  return (
    <div>
      
        <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vehicle</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Add Vehicle</a>
        <a class="nav-link" href="#">Search vehicle</a>
        <a class="nav-link" href="#">Delete Vehicle</a>
        <a class="nav-link" href="#">View All Vehicle</a>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default VehicleNavbar
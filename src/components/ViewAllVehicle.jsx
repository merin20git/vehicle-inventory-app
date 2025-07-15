import React from 'react'
import VehicleNavbar from './VehicleNavbar'

const ViewAllVehicle = () => {
    return (
        <div>
            <VehicleNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table table-light table-bordered">
                                    <thead>
                                        <tr>

                                            <th>Name</th>
                                            <th>Brand</th>
                                            <th>Fuel type</th>
                                            <th>Registration number</th>
                                            <th>Manufacturing date</th>
                                            <th>price</th>
                                            <th>Image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="table-active">
                                            
                                            <td> Honda</td>
                                            <td>Activa</td>
                                            <td>Petrol</td>
                                            <td>123gvfs</td>
                                            <td>20/11/2020</td>
                                            <td>75000</td>
                                            <td><img src="https://m.media-amazon.com/images/I/81xRgZYkMCL._SL1500_.jpg" height="50 px" width="50px" alt="" /></td>

                                        </tr>
                                        <tr>
                                        
                                            <td> truck</td>
                                            <td>Mahindra</td>
                                            <td>Diesel</td>
                                            <td>456bfb2</td>
                                            <td>01/04/2019</td>
                                            <td>20000</td>
                                            <td><img src="https://wallpapers.com/images/hd/truck-pictures-2arrdpurjxr3cyu7.jpg" height="50 px" width="50px" alt="" /></td>
                                          

                                        </tr>
                                        <tr>
                                         
                                            <td> car</td>
                                            <td>Tesla</td>
                                            <td>Petrol</td>
                                            <td>23dasf</td>
                                            <td>06/12/2023</td>
                                            <td>350000</td>
                                            <td><img src="https://th.bing.com/th/id/OIP.9zG2odYQpfADryDY3cxg-AHaEx?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" height="50 px" width="50px" alt="" /></td>


                                        </tr>
                                    </tbody>
                                </table>




                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllVehicle
import React from 'react'
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div className="col-md-2 sideBar_color">
            
        <div className="categoryBody pt-5 text-center">
          <ul>
            <li className="category">
              <Link to="/laundry">Laundry</Link>
            </li>
            <li className="category">
              <Link to="/fruit">Fruit</Link>
            </li>

            <li className="category">
              <Link to="/admin/orderList">Order List</Link>
            </li>
            <li className="category">
              <Link to="/admin/manageServices">Manage Services</Link>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default SideBar

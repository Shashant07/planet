import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import Newsletters from './Newsletters';

const Dashboard = () => {
  return (
    <>
    <Newsletters />
    <div className="page-title">
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><Link to="index.html">Home</Link></li>
            <li className="current">Dashboard</li>
            <span style={{margin: "0px 0px 0px auto", display: "block"}}>
              <Link className='dashboardLinks' to='/dashboard/user'>Users</Link>
              <Link className='dashboardLinks' to='/dashboard/newsletter'>Newsletters</Link>
              <Link className='dashboardLinks' to='/dashboard/contactDetails'>Contact Details</Link>
            </span>
            
          </ol>
        </div>
      </nav>
    </div>
    
    
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-12'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Dashboard;
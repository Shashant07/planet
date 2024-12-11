import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { FetchUserList, Removeuser } from "../../../redux/actions/userAction";

const Newsletters = (props) => {
    const { loaduser } = props;
    console.log(props.user.userlist)
    useEffect(() => {
        loaduser();
    }, [loaduser])
    const handledelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
            props.removeuser(code);
            props.loaduser();
            toast.success('User removed successfully.')
        }
    }
  return (
    <>
    <div className="page-title">
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="dashboard">Dashboard</Link></li>
            <li className="current">Newsletters</li>
            <span style={{margin: "0px 0px 0px auto", display: "block"}}>
              <Link className='dashboardLinks' to='/dashboard/user'>Users</Link>
              <Link className='dashboardLinks' to='/dashboard/contactDetails'>Contact Details</Link>
            </span>
            
          </ol>
        </div>
      </nav>
    </div>
    
    
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-12'>
          <table class="table table-striped">
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
                <td colSpan="2">Larry the Bird</td>
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

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loaduser: () => dispatch(FetchUserList()),
        removeuser: (code) => dispatch(Removeuser(code))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Newsletters);

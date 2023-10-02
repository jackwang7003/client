import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="admin">
      <h1>Admin</h1>
      <Link to="/Admin/Products">Product</Link>
      <br />
      <Link to="/Admin/Users">Users</Link>
     
    </div>
  );
};

export default Admin;
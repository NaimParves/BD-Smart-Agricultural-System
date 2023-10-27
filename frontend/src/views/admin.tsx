import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Admin_Page_show_admins from './admin_show_admins';
import Admin_Page_show_Field_Officers from './admin_show_fieldofficers_list';
const Admin_Page: React.FC = () => {
  const [userid, setUserid] = useState('');
  const [userType, setUserType] = useState('');
  useEffect(() => {
    const storedUserId = localStorage.getItem('userid');
    const storedUserType = localStorage.getItem('user_type');
    setUserid(storedUserId || '');
    setUserType(storedUserType || '');});
  return(
    <>
      <div>
        <h2>Welcome, Admin</h2>
        <p>User ID: {userid}</p>
        <p>User Type: {userType}</p>
      </div>
    <Admin_Page_show_admins></Admin_Page_show_admins>
    <Admin_Page_show_Field_Officers></Admin_Page_show_Field_Officers>
    </>
  )


};

export default Admin_Page;

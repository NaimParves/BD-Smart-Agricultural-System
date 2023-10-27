import React, { useEffect, useState } from 'react';

const Field_Officer_Page: React.FC = () => {
  const [userid, setUserid] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    // Retrieve user info from localStorage
    const storedUserId = localStorage.getItem('userid');
    const storedUserType = localStorage.getItem('user_type');
    setUserid(storedUserId || '');
    setUserType(storedUserType || '');
  }, []);

  return (
    <div>
      <h2 >Welcome, Field Officer</h2>
      <p>User ID: {userid}</p>
      <p>User Type: {userType}</p>
    </div>
  );
};

export default Field_Officer_Page;







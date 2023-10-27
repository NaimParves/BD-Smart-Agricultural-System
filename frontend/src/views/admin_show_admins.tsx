import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin_Page_show_admins: React.FC = () => {
  const [userid, setUserid] = useState('');
  const [userType, setUserType] = useState('');
  const [data, setData] = useState([]);

  // Add a state to force a re-render
  const [refresh, setRefresh] = useState(false);

  const deleteMember = (memberId: any) => {
    axios.post('http://127.0.0.1:8000/delete_admin/', { memberId })
      .then((response) => {
        if (response.data.success) {
          const updatedData = data.filter(item => item.id !== memberId);
          setData(updatedData);
          // Toggle the refresh state to force a re-render
          setRefresh(!refresh);
          window.alert('User deleted successfully.');
        } else {
          console.error('Delete request failed:', response.data);
          window.alert('User deletion failed. Please check the console for details.');
        }
      })
      .catch((error) => {
        console.error('Error deleting member:', error);
        window.alert('An error occurred while deleting the user. Please check the console for details.');
      });
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem('userid');
    const storedUserType = localStorage.getItem('user_type');
    setUserid(storedUserId || '');
    setUserType(storedUserType || '');

    axios.get('http://127.0.0.1:8000/register/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [refresh]); // Add 'refresh' to the dependency array

  return (
    <>


      <div>
        <h3>Data Table</h3>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Password</th>
              <th>Email</th>
              <th>Address</th>
              <th>NID</th>
              <th>User Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.userid}</td>
                <td>{item.password}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.nid}</td>
                <td>{item.user_type}</td>
                <td>
                  <button onClick={() => deleteMember(item.userid)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin_Page_show_admins;

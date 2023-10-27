import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin_Page_show_Incoming_request: React.FC = () => {
  const [userid, setUserid] = useState('');
  const [userType, setUserType] = useState('');
  const [data, setData] = useState([]);
  const [newMemberData, setNewMemberData] = useState({
    userid: '',
    password: '',
    email: '',
    address: '',
    nid: '',
    user_type: '',
  });

  // Add a state to force a re-render
  const [refresh, setRefresh] = useState(false);

  const deleteMember = (memberId: any) => {
    axios.post('http://127.0.0.1:8000/delete_incoming_request/', { memberId })
      .then((response) => {
        if (response.data.success) {
          const updatedData = data.filter(item => item.id !== memberId);
          setData(updatedData);
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
  let Url = '';
  const addMember = (newUserData: any) => {
    
    if (newUserData.user_type == 'admin'){
        Url = 'http://127.0.0.1:8000/register/'
    }else if (newUserData.user_type == 'field_officer'){
        Url = 'http://127.0.0.1:8000/register_field_officer/'
    }
    axios.post(Url, newUserData)
      .then((response) => {
        console.log('New member added:', response.data);
        deleteMember(newUserData.userid);
        window.alert('New member added successfully.');
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.error('Error adding member:', error);
        window.alert('Error adding member. Please check the console for details.');
      });
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem('userid');
    const storedUserType = localStorage.getItem('user_type');
    setUserid(storedUserId || '');
    setUserType(storedUserType || '');

    axios.get("http://127.0.0.1:8000/register_incoming_request/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [refresh]);

  return (
    <>
      <div>
        <h3>Incoming Request</h3>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Password</th>
              <th>Email</th>
              <th>Address</th>
              <th>NID</th>
              <th>User Type</th>
              <th>Add Member</th>
              <th>Delete Member</th>
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
                  
                  <button
                    onClick={() => {
                      // Assign the data to be added
                      const newUserData = {
                        userid: item.userid,
                        password: item.password,
                        email: item.email,
                        address: item.address,
                        nid: item.nid,
                        user_type: item.user_type,
                      };
                      // Add the new member
                      addMember(newUserData);
                    }}
                  >
                    Add Member
                  </button></td>
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

export default Admin_Page_show_Incoming_request;

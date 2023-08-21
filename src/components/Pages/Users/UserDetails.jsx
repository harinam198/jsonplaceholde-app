import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    website: '',
    telephone: '',
  });

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data: ', error);
      });
  }, [userId]);

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData({
      email: user.email,
      website: user.website,
      telephone: user.phone,
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, formData)
      .then((response) => {
        setUser({ ...user, ...formData });
        setIsEditing(false);
      })
      .catch((error) => {
        console.error('Error updating user data: ', error);
      });
  };

  return (
    <div>
      <h1>User Details</h1>
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Website:</strong> {user.website}
      </div>
      <div>
        <strong>Phone:</strong> {user.phone}
      </div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="telephone"
            placeholder="Telephone"
            value={formData.telephone}
            onChange={handleFormChange}
          />
          <button onClick={handleFormSubmit}>Save</button>
        </div>
      ) : (
        <button onClick={handleEditClick}>Edit Contact Info</button>
      )}
    </div>
  );
}

export default UserDetails;

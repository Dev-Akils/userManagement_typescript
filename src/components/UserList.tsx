import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import {RootState,AppDispatch} from '../redux/store';

import { deleteUser,editUser, fetchUsers } from '../features/users/userSlice';

interface User{
    id:number;
    name:string;
    email:string;
}

const UserList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading, error } = useSelector((state: RootState) => state.users);
  
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedEmail, setUpdatedEmail] = useState('');
  
    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);
  
    const handleEditClick = (user: User) => {
      setEditingUser(user);
      setUpdatedName(user.name);
      setUpdatedEmail(user.email);
    };
  
    const handleSaveClick = () => {
      if (editingUser) {
        const updatedUser = { ...editingUser, name: updatedName, email: updatedEmail };
        dispatch(editUser(updatedUser));
        setEditingUser(null); // Close the edit form
      }
    };
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div >
        <h2>User List</h2>
        <ul style={{
            justifyContent:"center",
            padding:"2px",
            textAlign:"center",
            fontSize:"18px",
           

        }}>
          {users.map((user) => (
            <li key={user.id } style={{listStyle:"none",padding:"10px", }}>
              {user.name} ({user.email})
              <div style={{justifyContent:"center",}}>
              <button onClick={() => handleEditClick(user)} 
             style={{
                backgroundColor: 'blueviolet',
                padding: '8px 12px',
                borderRadius: '4px',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                margin:"2px",
              }}
             
             >Update</button>
              <button onClick={() => dispatch(deleteUser(user.id))}
               style={{
                backgroundColor: 'red',
                padding: '8px 12px',
                borderRadius: '4px',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                margin:"2px"
              }}
               >Delete</button></div>
            </li>
          ))}
        </ul>
  
        {/* Show Edit Form if a user is being edited */}
        {editingUser && (
          <div>
            <h3>Edit User</h3>
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              placeholder="Enter new name"
            />
            <input
              type="email"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
              placeholder="Enter new email"
            />
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={() => setEditingUser(null)}>Cancel</button>
          </div>
        )}
      </div>
    );
  };
  
  export default UserList;
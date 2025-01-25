
import { useState,useEffect } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import axios from 'axios';
import UserListPro from './PropsPassing/UserListPro';
import UserFormPro from './PropsPassing/UserFormPro';

// Normal Api feching and User management Crud operations
// Normal Api fecting and User management with Props(passing Data)

// Define the type for your user data
type User={
  id:number;
  name:string;
  email:string;
};

function App() {
const [users,setUsers]=useState<User[]>([]);

useEffect(()=>{
  const fetchUser=async()=>{
    try{
      const res=await axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(res.data);

    }catch(err){
      console.log("Error fetching users:");
    }

  }
  fetchUser();
},[])


  return (
    <div className="App">
      <h1>User Management</h1>
     <UserListPro users={users} />
     <UserFormPro users={users} setUsers={setUsers} />
      {/* <UserForm/>
      <UserList/> */}
    </div>
  );
}

export default App;

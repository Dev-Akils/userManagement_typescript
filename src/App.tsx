
import { useState,useEffect } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import axios from 'axios';
import UserListPro from './PropsPassing/UserListPro';
import UserFormPro from './PropsPassing/UserFormPro';

import {createContext,useContext} from 'react';
import UserFormContext from './usercontext/UserFormContext';

import UseReducer from './useReducer/UseReducer';
// Normal Api feching and User management Crud operations
// Normal Api fecting and User management with Props(passing Data)

// Define the type for your user data  Props 
// type User={
//   id:number;
//   name:string;
//   email:string;
// };

type User={
  id:number;
  name:string;
  email:string;
}

type UserContextType={
  users:User[];
};


// Create a Context
const UserContext=createContext<UserContextType | undefined>(undefined);

export const UserProvider:React.FC<{children:React.ReactNode}>=({children})=>{
 const [users,setUsers]=useState<User[]>([]);
 useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      console.log('Fetched Users:', response.data); // Debug log
      setUsers(response.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };
  fetchUsers();
}, []);

  return <UserContext.Provider value={{users}}>{children}</UserContext.Provider>;
}


export const useUserContext=()=>{
  const context=useContext(UserContext);
  if(!context){
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

function App() {
// const [users,setUsers]=useState<User[]>([]);

// useEffect(()=>{
//   const fetchUser=async()=>{
//     try{
//       const res=await axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
//       setUsers(res.data);

//     }catch(err){
//       console.log("Error fetching users:");
//     }

//   }
//   fetchUser();
// },[])


  return (
    <div className="App">
      <h1>User Management</h1>

      {/* Wrap You App with the Provider */}
      <UserProvider>
        <UserFormContext/>
      </UserProvider>

     {/*
     Data fetching and User_management_crud , Data sharing Using Props

     <UserListPro users={users} />
     <UserFormPro users={users} setUsers={setUsers} />
      */}
      
      
      {/*Redux-toolkit-typescript
      Normal Data fetching and Using user_management_crud 
      
      <UserForm/>
      <UserList/> */}


      {/* useReducer-To create a counter that can increment and decrement it's value */}

      <UseReducer/>
    </div>
  );
}

export default App;

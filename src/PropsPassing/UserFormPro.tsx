import { useState } from "react";



// Define the type for your user data
type User = {
    id: number;
    name: string;
    email: string;
  };


type UserListFromApp={
    users:User[];
    setUsers:React.Dispatch<React.SetStateAction<User[]>>;
}


const UserFormPro:React.FC<UserListFromApp>=({users,setUsers})=>{
const [name,setName]=useState('');
const [email,setEmail]=useState('');

const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    const newUser:User={
        id:users.length+1,
        name,
        email,
    };
    setUsers([...users,newUser]);
    setName('');
    setEmail('');
}


    return(
       <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e)=>setName(e.target.value)}
        required
        />
        <input 
        type="email"
        value={email}
        placeholder="Enter email"
        onChange={(e)=>setEmail(e.target.value)}
        required
        />
        <button type="submit">Add User</button>

       </form>
    )
}
export default UserFormPro;
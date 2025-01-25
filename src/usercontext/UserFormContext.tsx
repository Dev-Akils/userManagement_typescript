import React from 'react';
import { useUserContext } from '../App';
import AnotherForm from './AnotherForm';


const UserFormContext:React.FC=()=>{
const {users}=useUserContext();
console.log("user:"+users)
    const filteredUsers=users.filter(user=>user.email.endsWith('april.biz'));
    
    return(
        <>
        <h2>User List</h2>
        <h2>Filtered Users (@gmail.com)</h2>
        <ul>
            {filteredUsers.map(user=>(
                <li key={user.id}>
                    <strong>{user.name}</strong>-{user.email}
                </li>
            ))}
        </ul>

        {/* AnotherForm will have access to users through the context */}
         <AnotherForm />
        </>
    )
}

export default UserFormContext;
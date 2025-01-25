import React from 'react';
import { useUserContext } from '../App';

const AnotherForm:React.FC=()=>{
    const {users}=useUserContext();
    return(
        <div>
            <h3>Another Form-All Users</h3>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        <strong>{user.name}</strong>-{user.email}
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AnotherForm;
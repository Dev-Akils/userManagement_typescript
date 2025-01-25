import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addUser } from "../features/users/userSlice";

const UserForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      name,
      email,
    };
    console.log(newUser.id);
    dispatch(addUser(newUser));
    setName("");
    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Enter Email</label>
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add User</button>

        
       
      </form>
    </>
  );
};

export default UserForm;

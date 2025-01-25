

// Define the type for your user data
type User = {
  id: number;
  name: string;
  email: string;
};

type UserListFromApp = {
  users: User[];
};




const UserListPro: React.FC<UserListFromApp> = ({ users }) => {
  return (
    <>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>-{user.email}
          </li>
        ))}
      </ul>
    </>
  );
};
export default UserListPro;

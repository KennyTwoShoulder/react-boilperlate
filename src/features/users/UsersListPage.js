import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MainPage from 'app/MainPage';
import { selectAllUsers } from './usersSlice';

function UsersListPage() {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map(user => (
    <li key={user.id}>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return (
    <MainPage id="users-list-page">
      <h2>Users</h2>

      <ul>{renderedUsers}</ul>
    </MainPage>
  );
}

export default UsersListPage;
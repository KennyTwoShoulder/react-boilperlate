import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import MainPage from 'app/MainPage';
import { selectAllPosts } from 'features/posts/postsSlice';
import { selectUserById } from "./usersSlice";

function UserPage() {
  const { userId } = useParams();

  const user = useSelector(state => selectUserById(state, userId));

  const postsForUser = useSelector(state => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter(post => post.user === userId);
  });

  const postTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <MainPage id="single-user-page">
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </MainPage>
  );
}

export default UserPage;
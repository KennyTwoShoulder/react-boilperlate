import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  CircularProgress,
} from '@mui/material';

import MainPage from 'app/MainPage';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import AddPostForm from 'features/posts/AddPostForm';
import { useGetPostsQuery } from 'api/apiSlice';

function PostExcerpt({ post }) {
  return (
    <article className="post-excerpt">
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>

      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  );
}

function PostsListPage() {
  const {
    data: posts = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery();

  const sortedPosts = useMemo(() => {
    const sortedPosts = posts.slice();
    // Sort posts in descending chronological order
    sortedPosts.sort((a, b) => b.date.localeCompare(a.date));
    return sortedPosts;
  }, [posts]);

  let content;

  if (isLoading) {
    content = <CircularProgress />;
  } else if (isSuccess) {
    content = sortedPosts.map(post => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <MainPage id="posts-list-page">
      <AddPostForm />
      <h2>Posts</h2>
      {content}
    </MainPage>
  );
}

export default PostsListPage;
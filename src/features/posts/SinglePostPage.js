import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  CircularProgress,
} from '@mui/material';

import MainPage from "app/MainPage";
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import { useGetPostQuery } from "api/postApi";

function SinglePostPage() {
  const { postId } = useParams();

  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId);

  let content;
  if (isFetching) {
    content = <CircularProgress />;
  } else if (isSuccess) {
    content = (
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.user} />
        <br />
        <Link to={`/editPost/${post.id}`} className="button">Edit Post</Link>
      </article>
    )
  }

  return (
    <MainPage id="single-post-page">
      {content}
    </MainPage>
  );
};

export default SinglePostPage;
/* Imports for NPM libraries */
import {
  Routes,
  Route,
} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  CssBaseline,
} from '@mui/material';

/* Imports for local files */
import MainLayout from 'app/MainLayout';
import DashboardPage from 'features/dashboard/DashboardPage';
import ProductListPage from 'features/products/ProductListPage';
import PostsList from 'features/posts/PostsListPage';
import SinglePostPage from 'features/posts/SinglePostPage';
import EditPostForm from 'features/posts/EditPostForm';
import UsersListPage from 'features/users/UsersListPage';
import UserPage from 'features/users/UserPage';
import NotificationsListPage from 'features/notifications/NotificationsListPage';
import PlaygroundPage from 'features/playground/PlaygroundPage';
import ErrorPage from 'app/ErrorPage';
import frappe from 'api/frappe';

const auth = frappe.auth();

auth
  .loginWithUsernamePassword({ username: 'Administrator', password: 'changeit' })
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="posts" element={<PostsList />} />
          <Route path="posts/:postId" element={<SinglePostPage />} />
          <Route path="editPost/:postId" element={<EditPostForm />} />
          <Route path="users" element={<UsersListPage />} />
          <Route path="users/:userId" element={<UserPage />} />
          <Route path="notifications" element={<NotificationsListPage />} />
          <Route path="playground" element={<PlaygroundPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

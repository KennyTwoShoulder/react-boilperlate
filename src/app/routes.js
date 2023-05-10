import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FeedIcon from '@mui/icons-material/Feed';
import LayersIcon from '@mui/icons-material/Layers';

import DashboardPage from "features/dashboard/DashboardPage";
import EditPostForm from "features/posts/EditPostForm";
import PostsListPage from "features/posts/PostsListPage";
import SinglePostPage from "features/posts/SinglePostPage";
import UsersListPage from "features/users/UsersListPage";
import PlaygroundPage from 'features/playground/PlaygroundPage';
import CustomerListPage from 'features/customer/CustomerListPage';

export const protectedRoutes = [
  {
    path: '/',
    element: <DashboardPage />,
    navItem: {
      text: 'Dashboard',
      icon: <DashboardIcon />
    },
  },
  {
    path: 'users',
    element: <UsersListPage />,
    navItem: {
      text: 'Users',
      icon: <PeopleIcon />
    },
    allowedRoles: [
      'System Manager',
    ]
  },
  {
    path: 'customers',
    element: <CustomerListPage />,
    navItem: {
      text: 'CRM',
      icon: <Diversity3Icon />
    },
    allowedRoles: [
      'Sales Master Manager',
    ]
  },
  {
    path: 'posts',
    element: <PostsListPage />,
    navItem: {
      text: 'Posts',
      icon: <FeedIcon />
    },
  },
  {
    path: 'posts/:postId',
    element: <SinglePostPage />,
  },
  {
    path: 'editPost/:postId',
    element: <EditPostForm />,
  },
  {
    path: 'playground',
    element: <PlaygroundPage />,
    navItem: {
      text: 'Playground',
      icon: <LayersIcon />
    },
  }
];

export const publicRoutes = [

];
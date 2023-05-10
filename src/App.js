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
import ProtectedLayout from 'app/ProtectedLayout';
import ErrorPage from 'app/ErrorPage';

import { useMeQuery } from 'api/authApi';
import { protectedRoutes } from 'app/routes';
import Auth from 'features/auth/Auth';
import SignInPage from 'features/auth/SignInPage';
import UnauthorizedPage from 'features/auth/UnauthorizedPage';

const mdTheme = createTheme();

function App() {
  const protectedRouteItems = protectedRoutes.map(route =>{
    if (route.path === '/') return <Route index element={route.element} key={route.path} />

    if (Array.isArray(route.allowedRoles) && route.allowedRoles.length > 0) {
      return (
        <Route element={<Auth allowedRoles={route.allowedRoles} />}  key={route.path}>
          <Route path={route.path} element={route.element} />
        </Route>
      );
    } else {
      return <Route path={route.path} element={route.element} key={route.path} />;
    }
  });

  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Routes>
        <Route path="signin" element={<SignInPage />} />
        <Route path="unauthorized" element={<UnauthorizedPage />} />
        <Route path="/" element={<ProtectedLayout />}>
          {protectedRouteItems}

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

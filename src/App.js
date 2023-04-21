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
import MainLayout from './app/MainLayout';
import DashboardPage from './features/dashboard/DashboardPage';
import ProductListPage from './features/product/ProductListPage';
import ErrorPage from './app/ErrorPage';

const mdTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="products" element={<ProductListPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

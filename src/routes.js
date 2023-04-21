import MainLayout from './components/MainLayout';
import ErrorPage from './pages/ErrorPage';
import ProductListPage from './pages/ProductListPage';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'products',
        element: <ProductListPage />
      },
    ],
  }
];

export default routes;
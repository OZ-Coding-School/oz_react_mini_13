import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import MovieDetail from './components/MovieDetail.jsx';
import Layout from './components/Layout.jsx';
import './index.css'; // Tailwind CSS 기본 설정을 위해 필요

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '/details/:id', // 실제 영화 ID를 사용하지만, 현재는 더미 데이터 고정
        element: <MovieDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


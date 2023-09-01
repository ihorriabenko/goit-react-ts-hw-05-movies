import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

import {
  homeLoader,
  castLoader,
  movieDetailsLoader,
  reviewsLoader,
} from './pages';

import './index.css';

const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const Root = lazy(() => import('./pages/Root'));
const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: 'movies',
        element: <Movies />,
      },
      {
        path: 'movies/:movieId',
        element: <MovieDetails />,
        loader: movieDetailsLoader,
        children: [
          {
            path: 'cast',
            element: <Cast />,
            loader: castLoader,
          },
          {
            path: 'reviews',
            element: <Reviews />,
            loader: reviewsLoader,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

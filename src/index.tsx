import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';

import {
  homeLoader,
  castLoader,
  movieDetailsLoader,
  reviewsLoader,
  moviesLoader,
} from './routes';

import './index.css';

const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const Root = lazy(() => import('./routes/Root'));
const Home = lazy(() => import('./routes/Home'));
const Movies = lazy(() => import('./routes/Movies'));
const MovieDetails = lazy(() => import('./routes/MovieDetails'));
const Cast = lazy(() => import('./routes/Cast'));
const Reviews = lazy(() => import('./routes/Reviews'));

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
        loader: moviesLoader,
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

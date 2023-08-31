import { Link, Outlet, useLoaderData, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../api/getMovies';
import { MovDetails } from '../types/types';
import { useEffect, useState } from 'react';

export async function movieDetailsLoader({ params }: any) {
  const movieDetails = await getMovieDetails(params.movieId);

  return movieDetails;
}

export default function MovieDetails() {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    useLoaderData() as MovDetails;
  const location = useLocation();

  const genreList = genres.map((el) => el.name);

  const [x, setX] = useState('');

  useEffect(() => {
    setX(location.state.from);
  }, []);

  const backLinkHref = location.state?.from ?? x;
  const date = release_date.slice(0,4);
  
  return (
    <>
      <section>
          <Link className='goBack' to={backLinkHref}>Go back</Link>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt='movie poster'
          />
        <ul>
          <li>
            <p>
              {title}
              {date}
            </p>
          </li>
          <li>
            {' '}
            <p>User score: {vote_average}</p>
          </li>
          <li>
            {' '}
            <p>Overview: {overview}</p>
          </li>
          <li>
            <p>Genres: {genreList}</p>
          </li>
        </ul>

        <ul className='cr'>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </section>

      <Outlet />
    </>
  );
}

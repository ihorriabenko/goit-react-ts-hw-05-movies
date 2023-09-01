import { Link, Outlet, useLoaderData, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../api/getMovies';
import { MovDetails } from '../types/types';

const defImg =
  'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg';

export async function movieDetailsLoader({ params }: any) {
  const movieDetails = await getMovieDetails(params.movieId);

  return movieDetails;
}

export default function MovieDetails() {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    useLoaderData() as MovDetails;
  const location = useLocation();

  const genreList = genres.map((el) => el.name);
  const date = release_date.slice(0, 4);

  const backLinkHref = location.state.from ?? '/';

  return (
    <>
      <section>
        <Link className='goBack' to={backLinkHref}>
          Go back
        </Link>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : defImg
          }
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

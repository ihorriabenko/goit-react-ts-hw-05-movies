import { useLoaderData, useLocation } from 'react-router-dom';
import { getTopRatedMovies } from '../api/getMovies';
import { TopRatedMovie } from '../types/types';
import MovieList from '../components/MovieList/MovieList';

export async function homeLoader() {
  const movies = await getTopRatedMovies();

  return movies;
}

export default function Home() {
  const movies = useLoaderData() as TopRatedMovie[];
  const location = useLocation();

  return <>{<MovieList movies={movies} location={location}/>}</>;
}

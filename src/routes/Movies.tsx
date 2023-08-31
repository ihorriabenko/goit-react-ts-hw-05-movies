import {
  Form,
  useLoaderData,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { getMovies } from '../api/getMovies';
import MovieList from '../components/MovieList/MovieList';
import { TopRatedMovie } from '../types/types';
import { useState } from 'react';

export async function moviesLoader({ request }: any) {
  if (request.url.split('?').length > 1) {
    let url = new URL(request.url);
    let searchTerm = url.searchParams.get('query');

    return getMovies(searchTerm as string);
  }

  return {};
}

export default function Movies() {
  const [value, setValue] = useState('');
  
  const movies = useLoaderData() as TopRatedMovie[];
  const location = useLocation();

  return (
    <>
      <Form method='get' action='/movies' onSubmit={() => setValue('')}>
        <input
          aria-label='search products'
          type='text'
          name='query'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'>Search</button>
      </Form>
      {Array.isArray(movies) && (
        <MovieList movies={movies} location={location} />
      )}
    </>
  );
}

import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../api/getMovies';
import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import Form from '../components/Form/Form';
import { TopRatedMovie } from '../types/types';

export default function Movies() {
  const [movies, setMovies] = useState<TopRatedMovie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) return setMovies([]);

    const getData = async () => {
      const movies = await getMovies(query);

      setMovies([...movies]);
    };

    getData();
  }, [searchParams]);

  const updateQueryString = (query: { query?: string }) => {
    setSearchParams(query);
  };

  return (
    <>
      <Form updateQueryString={updateQueryString} />
      {Array.isArray(movies) && <MovieList movies={movies} />}
    </>
  );
}

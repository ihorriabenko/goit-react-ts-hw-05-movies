import { TopRatedMovie } from '../../types/types';
import MovieItem from '../MovieItem/MovieItem';

interface MovieListProps {
  movies: TopRatedMovie[];
}

export default function MovieList({ movies }: MovieListProps) {
  const elements = movies.map((el) => (
    <MovieItem key={el.id} id={el.id} title={el.title} />
  ));

  return <ul>{elements}</ul>;
}

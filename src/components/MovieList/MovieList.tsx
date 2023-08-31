import { Location } from 'react-router-dom';
import { TopRatedMovie } from '../../types/types';
import MovieItem from '../MovieItem/MovieItem';

interface MovieListProps {
  movies: TopRatedMovie[];
  location: Location;
}

export default function MovieList({ movies, location }: MovieListProps) {
  const elements = movies.map((el) => (
    <MovieItem key={el.id} id={el.id} title={el.title} location={location} />
  ));

  return <ul>{elements}</ul>;
}

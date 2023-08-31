import { Link, Location, useSearchParams } from 'react-router-dom';

interface MovieItemProps {
  id: number;
  title: string;
  location: Location;
}

export default function MovieItem({ id, title, location }: MovieItemProps) {
  let [searchParams] = useSearchParams();

  return (
    <li>
      {searchParams.size ? (
        <Link to={`${id}`} state={{ from: location }}>
          {title}
        </Link>
      ) : (
        <Link to={`movies/${id}`} state={{ from: location }}>
          {title}
        </Link>
      )}
    </li>
  );
}

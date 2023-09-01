import { Link, useLocation } from 'react-router-dom';

interface MovieItemProps {
  id: number;
  title: string;
}

export default function MovieItem({ id, title }: MovieItemProps) {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
}

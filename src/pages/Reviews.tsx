import { useLoaderData } from 'react-router-dom';
import { getMovieReviews } from '../api/getMovies';
import { Review } from '../types/types';

export async function reviewsLoader({ params }: any) {
  const reviews = await getMovieReviews(params.movieId);

  return reviews;
}

export default function Reviews() {
  const reviews = useLoaderData() as Review[];

  const elements = reviews.map((el) => (
    <li key={el.id}>
      <ul>
        <li>
          <p>Author: {el.author}</p>
        </li>
        <li>
          <p>{el.content}</p>
        </li>
      </ul>
    </li>
  ));

  return (
    <>{elements.length > 0 ? <ul>{elements}</ul> : <p>We don't have any reviews for this movie.</p>}</>
  );
}

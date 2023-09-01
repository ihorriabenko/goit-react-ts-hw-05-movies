import { useLoaderData } from 'react-router-dom';
import { getMovieCast } from '../api/getMovies';
import { CastType } from '../types/types';

const defImg =
  'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg';

export async function castLoader({ params }: any) {
  const cast = await getMovieCast(params.movieId);

  return cast;
}

export default function Cast() {
  const cast = useLoaderData() as CastType[];

  const elements = cast.map((el) => (
    <li key={el.id}>
      <img
        src={
          el.profile_path
            ? `https://image.tmdb.org/t/p/w200${el.profile_path}`
            : defImg
        }
        alt='actor'
      />
      <ul>
        <li>
          <p>{el.name}</p>
        </li>
        <li>
          <p>Character: {el.character}</p>
        </li>
      </ul>
    </li>
  ));

  return <ul>{elements}</ul>;
}

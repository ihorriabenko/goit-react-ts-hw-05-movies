import { MovDetails, TopRatedMovie, CastType, Review } from '../types/types';

const url = 'https://api.themoviedb.org/3/movie/';
const Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTZkYTJkMmRkNGY5NWZkOWJmZTA5MjdhYjVkNGQzMyIsInN1YiI6IjYyYzk1NmVlMDVmOWNmMDA0YzgzN2Y4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7I0uA1CFy0ncs6gJPXI4ll0C-HueqVqiPU66cAGQEeE';

export async function getTopRatedMovies(): Promise<TopRatedMovie[]> {
  try {
    const res = await fetch(`${url}top_rated?language=en-US&page=1`, {
      headers: {
        Authorization,
      },
    });

    const { results: movies } = await res.json();

    return movies;
  } catch (error) {
    throw error;
  }
}

export async function getMovieDetails(id: string): Promise<MovDetails> {
  try {
    const res = await fetch(`${url}${id}`, {
      headers: {
        Authorization,
      },
    });

    const movieDetails = await res.json();

    return movieDetails;
  } catch (error) {
    throw error;
  }
}

export async function getMovieCast(id: string): Promise<CastType[]> {
  try {
    const res = await fetch(`${url}${id}/credits`, {
      headers: {
        Authorization,
      },
    });

    const { cast } = await res.json();

    return cast;
  } catch (error) {
    throw error;
  }
}

export async function getMovieReviews(id: string): Promise<Review[]> {
  try {
    const res = await fetch(`${url}${id}/reviews`, {
      headers: {
        Authorization,
      },
    });

    const { results: reviews } = await res.json();

    return reviews;
  } catch (error) {
    throw error;
  }
}

export async function getMovies(query: string): Promise<TopRatedMovie[]> {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}`,
      {
        headers: {
          Authorization,
        },
      }
    );

    const {results: movies} = await res.json();

    return movies;
  } catch (error) {
    throw error;
  }
}

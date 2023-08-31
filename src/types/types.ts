export interface TopRatedMovie {
  id: number;
  title: string;
}

interface Genre {
  id: number;
  name: string;
}

export interface MovDetails {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  genres: Genre[];
  poster_path: string;
}

export interface CastType {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
}

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  runtime: number;
  genres: Genre[];
};

export type Genre = {
  id: number;
  name: string;
};
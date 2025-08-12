import axios from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const config = {
    params: { query },
    headers: { Authorization: `Bearer ${TOKEN}` },
  };

  try {
    const response = await axios.get<FetchMoviesResponse>(
      `${BASE_URL}/search/movie`,
      config
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

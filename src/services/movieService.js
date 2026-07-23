import axios from 'axios'

const token = import.meta.env.VITE_TMDB_TOKEN

if (!token) {
  throw new Error('Missing VITE_TMDB_TOKEN environment variable.')
}

const client = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: { language: 'pl-PL' },
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

const getResults = (request) => request.then(({ data }) => data.results)

export const movieService = {
  getPopularMovies: () => getResults(client.get('/movie/popular')),
  searchMovies: (query) => getResults(client.get('/search/movie', { params: { query } })),
  getMovieDetails: (id) => client.get(`/movie/${id}`).then(({ data }) => data),
}

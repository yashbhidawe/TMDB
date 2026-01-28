// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  Header: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500",
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movies?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.Header,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  console.log("Response Status:", response.statusText);
  const data = await response.json();
  return data;
};
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGI1YmFmNmNiOWY1ZTAyNmVmNGE0NTI1OTI2MDQ0MyIsIm5iZiI6MTc2OTQ4MjgzMS42NjEsInN1YiI6IjY5NzgyYTRmZjdiOWNmMmE5MTFhMTkzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.62qni7_vSGW36b01-lqQCrRW6Ych9lQiNYbbeZY6HKs'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

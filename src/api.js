import axios from 'axios'

const API=''
const BASE_URL='https://api.themoviedb.org/3'
export const getTrendingMovies=async () => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
          params: {
            api_key: API,
          },
        });
        return response.data.results;
      } catch (error) {
        console.error("Error al obtener películas en tendencia:", error);
        return [];
      }
}

export const getSeries = async ()=> {
  try {
    const response = await axios.get(`${BASE_URL}/tv/on_the_air`, {
      params:{
        api_key:API,
      }
    });
    return response.data.results;
  } catch (error) {
    console.error("Error no se obtuvo las series",error);
    return []
  }
}

export const getCommingSoon = async ()=> {
  try {
     const response = await axios.get(`${BASE_URL}/movie/upcoming`,{
      params: {
        api_key:API,
      },
     })
     return response.data.results;
  } catch (error) {
    console.error("Error al obtener peliculas que llegaran", error);
    return [];
  }
}

export const getMovieVideos = async (movieId) => {
  try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
          params: {
              api_key: API,
          },
      });
      return response.data.results; 
  } catch (error) {
      console.error("Error al obtener videos de la película:", error);
      return [];
  }
};

export const fetchTrailerKey = async (movieId) => {
  const videos = await getMovieVideos(movieId);
  const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');
  return trailer ? trailer.key : null;
};

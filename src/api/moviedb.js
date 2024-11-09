import axios from 'axios'
import { apiKey } from '../constants'

//endpoints
const apiBaseURL = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseURL}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoin = `${apiBaseURL}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint = `${apiBaseURL}/movie/top_rated?api_key=${apiKey}`




export const image500 = path => path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image345 = path => path ? `https://image.tmdb.org/t/p/w345${path}` : null;
export const image185 = path => path ? `https://image.tmdb.org/t/p/w185${path}` : null;



export const fallBackMoviePoster = '../assets/movieLogo.png'
export const fallBackPersonImage = ''


const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error :', error)
        return {}
    }
}

export const fetchTrendingMovies = () => {
    return apiCall(trendingMoviesEndpoint);
}
export const upComingMovies = () => {
    return apiCall(upcomingMoviesEndpoin);
}
export const topRatedMovies = () => {
    return apiCall(topRatedMoviesEndpoint);
}
import axios from 'axios'
import { apiKey } from '../constants'

//endpoints
const apiBaseURL = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseURL}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoin = `${apiBaseURL}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint = `${apiBaseURL}/movie/top_rated?api_key=${apiKey}`
const searchMoviesEndpoint = `${apiBaseURL}/search/movie?api_key=${apiKey}`

//dynamic endpoints
const movieDetailsEndPoint = id => `${apiBaseURL}/movie/${id}?api_key=${apiKey}`
const movieCreditEndPoint = id => `${apiBaseURL}/movie/${id}/credits?api_key=${apiKey}`
const similarEndPoint = id => `${apiBaseURL}/movie/${id}/similar?api_key=${apiKey}`


const personDetailsEndPoint = id => `${apiBaseURL}/person/${id}?api_key=${apiKey}`
const personMovieEndPoint = id => `${apiBaseURL}/person/${id}/movie_credits?api_key=${apiKey}`


export const image500 = path => path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = path => path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = path => path ? `https://image.tmdb.org/t/p/w185${path}` : null;



export const fallBackMoviePoster = 'https://img.freepik.com/premium-vector/movie-chat-logo_62569-146.jpg?w=740'
export const fallBackPersonImage = 'https://img.freepik.com/premium-vector/happy-positive-man-showing-gesture-ok-sign-gesture-language-concept-flat-vector-illustration_697837-87.jpg?w=740'


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
export const fetchMovieDetails = id => {
    return apiCall(movieDetailsEndPoint(id));
}
export const fetchMovieCredits = id => {
    return apiCall(movieCreditEndPoint(id));
}
export const fetchSimilarMovies = id => {
    return apiCall(similarEndPoint(id));
}
export const fetchPersonDetails = id => {
    return apiCall(personDetailsEndPoint(id));
}
export const fetchPersonMovies = id => {
    return apiCall(personMovieEndPoint(id));
}
export const searchMovies = params => {
    return apiCall(searchMoviesEndpoint, params);
}
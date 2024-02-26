import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import MovieApi from '../../common/api/MovieApi';
import { API_KEY } from '../../common/api/MovieApikey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {

  const movieText = "Harry";
  const dispatch = useDispatch();

  useEffect(() => {
   
    const fetchMovies = async() => {
      const response = await MovieApi.get(`?apikey=${API_KEY}&s=${movieText}&type=movie`)
      .catch((err) => console.log(err));

      dispatch(addMovies(response.data));
    };

    fetchMovies();
  });

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home;
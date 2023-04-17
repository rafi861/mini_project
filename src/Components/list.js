import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fungsi untuk mengambil data film dari API TMDB
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular', // URL endpoint API TMDB
          {
            params: {
              api_key: 'cdcb78f44f696533bef8086793f8c791', // Ganti dengan API Key TMDB Anda
              language: 'en-US', // Bahasa data film
              page: 1 // Halaman data film
            }
          }
        );
        setMovies(response.data.results); // Set data film ke state movies
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className='cart'>
      {/* Tampilkan data film sebagai komponen kartu */}
      {movies.map(movie => (
        <div key={movie.id} >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          {/* <h3>{movie.title}</h3> */}
          {/* <p>{movie.overview}</p> */}
        </div>
      ))}
    </div>
  );
};

export default MovieList;


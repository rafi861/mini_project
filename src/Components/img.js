import React, { useEffect, useState } from 'react';

const MovieGallery = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch data dari API TMDb
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=cdcb78f44f696533bef8086793f8c791')
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>Movie Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            style={{ width: '200px', height: '300px', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieGallery;

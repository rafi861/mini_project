import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImagesWithFiveItemsPerRow = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Mengambil data gambar dari TMDB API menggunakan axios
    axios
      .get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: 'ce680bd26b6356bf5d8673b99e780e5406250817',
          language: 'en-US',
          page: 1,
        },
      })
      .then((response) => {
        setImages(response.data.results.slice(0, 5)); // Mengambil 5 gambar pertama
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div>
      {/* <h1>Popular Movie Images</h1> */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <img
            key={image.id}
            src={`https://image.tmdb.org/t/p/w300${image.poster_path}`}
            alt={image.title}
            style={{ width: '20%', height: 'auto', padding: '0.5rem', boxSizing: 'border-box' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesWithFiveItemsPerRow;

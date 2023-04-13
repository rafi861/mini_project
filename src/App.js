import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './Components/navbar';
import './style/navbar.css'
import { useEffect, useState,  } from 'react';
import axios from 'axios';
// import BasicExample from './Components/card';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const [movies, setMovies] = useState ([])
  
  useEffect (() =>{
axios({
  method: 'get',
  url: 'https://api.themoviedb.org/3/movie/popular?api_key=cdcb78f44f696533bef8086793f8c791&session_id=ce680bd26b6356bf5d8673b99e780e5406250817'
})
.then(function (response){
console.log(response.data.results);
setMovies(response.data.results)
})
  },[])
  return (
    <div >
      <div className='rafi'>
      <CollapsibleExample/>
      </div>
      <div className='kartu'>
        {movies.map((results, index) =>{
          return (
<Card style={{ width: '18rem' }} className='' key={index}>
      <Card.Img variant="top" src=' ' />
      <Card.Body>       
        <Card.Title>{results.title}</Card.Title>
        <Card.Text>
          {results.overview}
        </Card.Text>
        <div>{results.id}</div>
        <br></br>
        <div>{results.popularity}</div> <br></br>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          )
        })}
      
      </div>
    </div>
  );
}
// https://image.tmdb.org/t/p/w500
// ce680bd26b6356bf5d8673b99e780e5406250817
export default App;

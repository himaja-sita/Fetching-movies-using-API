import MoviesList from './MoviesList';
import './App.css';
import { useState,useCallback,useEffect } from 'react';
function App() {
//const dummy_movies=[{id:'m1',title:"simha",description:"A legend movie"},{id:'m2',title:'Harry Potter',description:'my fav'}]
const [error,setError]=useState(null);
const [movies,setMovies]=useState([]);
const [isloading,setIsloading]=useState(false);

const fetchmovies=useCallback(async ()=>{
  setIsloading(true);
  try{const response=await fetch('https://swapi.dev/api/films');
  if(!response.ok){
    throw new Error('response failed')
  }
  const data=await response.json();
   setMovies(data.results.map(movie=>{
    return {id:movie.id, title:movie.title,description:movie.opening_crawl}
   }));

}
catch(error){
  setError(error.message);
}
setIsloading(false);
},[])

useEffect(()=>{
  fetchmovies();
},[fetchmovies]);
let content=<p>Found no movies</p>;
if(movies.length!==0){
  content =<MoviesList movies={movies}></MoviesList>;
}
  return <>
  <div className='card'>
    <button onClick={fetchmovies}>Fetch Movies</button>
  </div>
  <div>
    
    {!isloading &&  content}
    {isloading&& <p className='card'>Loading...</p>}
  {!isloading && !error && content}
  {!isloading && error &&<p>{error}</p>}
  </div>
  

  </>
}

export default App;

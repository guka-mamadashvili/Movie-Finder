import SearchBar from './components/search-bar/SearchBar';
import Navbar from "./components/navbar/Navbar";
import MovieCard from "./components/movie-card/MovieCard";
import { useEffect } from "react";
import { useState } from "react";
import './App.css';

const API_URL = 'http://www.omdbapi.com?apikey=1ae6bcb9';

const movie1 = {
   "Title": "Interstellar",
   "Year": "2014",
   "imdbID": "tt0816692",
   "Type": "movie",
   "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
};

const App = () => {

   const [movies, setMovies] = useState([]);

   const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
   }

   useEffect(() => {
      searchMovies("harry potter");
   }, []);

   return (
      <>
         <Navbar />
         <SearchBar searchMovies={searchMovies}/>

         {
            movies?.length > 0
            ? (
               <div className="container">
               {movies.map((movie) => (
                  <MovieCard movie={movie}/>
               ))}
               </div>  
            ) : 
            (
               <div className='empty'>
                  <h2>No movies found!</h2>
               </div>
            )
         }

           
    </>
   );
}

export default App;
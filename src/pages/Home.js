import React from 'react'
import Slider from '../components/Slider'
import  {useEffect, useState} from 'react'


export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0')
      .then(response => response.json())
      .then(data => {
        setMovies(data.results.slice(0, 8));
      })
      .catch(error => console.error('Error fetching top movies:', error));
  }, []); 


   
  return (
    
      
      <div className="container mt-4">
        <Slider />
        
        <div className='container'>
        <div className='row'>
        <h3 className="text-center mb-5 mt-5">Top Movies</h3>
        
        
                   {movies.map((movie) => (
                    
                     <div className='col-3 p-3'>
                       <div key={movie.id} className="card " style={{ width: '18rem' }}>
                           <img
                               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                               className="card-img-top" style={{ height: '230px' }}
                               alt="Movies"
                           />
                           
                           <div className="card-body ">
                               <h5 className="card-title fw-bold" style={{ height: '40px' }}>{movie.title} </h5>
                               
                             
                               <p className="mb-4 fw-bold">
                    <i className="bi bi-calendar-check ">&nbsp;&nbsp;{movie.release_date}</i> 
                    <br />
                    <i className="bi bi-star">&nbsp;&nbsp;{movie.vote_average}</i> 
                    
      
                </p>
                               <a href="/Movie" className="btn btn-outline-primary">
                                   <i class="bi bi-arrow-right"></i>
                               </a>
                           </div>
                           
                       </div>
                       </div>
                       
                   ))}
                   </div>
               
               
           </div>
       
        <div className="d-flex justify-content-center text-center mt-5">
          
              <a href="/movie" className="btn btn-outline-primary mb-5">Eksploro filmat <i class="bi bi-arrow-right"></i></a>
  </div>
   </div>
  
  );
};

    
  
 
  

import React from 'react'
import  {useEffect, useState} from 'react'

export default function Movies() {
  const [movies, setMovies] = useState([])
 
  useEffect(() => {
    const fetchData = async () => {
        const api_url = 'https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0'; 

        try {
            const response = await fetch(api_url);
            const data = await response.json();
            const moviesData = data.results;
            setMovies(moviesData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData()
}); 

  return (
    <>
     <div className='container'>
     <div className='row'>
     
     
                {movies.map((movie) => (
                  <div className='col-3 p-3 g-col-6'>
                    <div key={movie.id} className="card" style={{ width: '18rem' }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            className="card-img-top" style={{ height: '230px' }}
                            alt="Movies"
                        />
                        <div className="card-body">
                            <h5 className="card-title fw-bold" style={{ height: '40px' }}>{movie.title}</h5>
                            <p className="mb-4 fw-bold">
                    <i className="bi bi-calendar-check">&nbsp;&nbsp;{movie.release_date}</i> 
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
    </>
  )
}


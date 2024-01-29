import React from 'react'
import  {useEffect, useState} from 'react'


export default function Pagination() {
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([])
   {/* const [userList, setUserList] = useState([]); */}
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const getUserList = () => {
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0&page=${page}`)
          .then(response => response.json())
          .then(data => {
          setTotalPages(page.results); 
              setMovies(data.results); 
           {/* setUserList([...userList, ... data.results]); */}
            setLoading(false);
          });
      }
      getUserList();
    }, [page]);
  

    
    return (
        
      
        <div className='container'>
        <div className='row'>
  
        
        
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
                                   <i className="bi bi-arrow-right"></i>
                               </a>
                           </div>
                           
                       </div>
                       </div>
                       
                   ))}
                   
                   
                   </div>
                   <div className=''>
                   
                   {totalPages !== page && <button className="btn btn-outline-primary  d-grid gap-2 col mt-4 mb-4 mx-auto " onClick={() => setPage(page + 1)}>{loading ? 'Loading...' : 'Load More'}</button>}
                   </div>
                   </div>
                 
                  
             
               
               
               
               
        )}
      
       
      

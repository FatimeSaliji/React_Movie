import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
            <div className="container ">
                <img src='https://www.pngitem.com/pimgs/m/30-301239_cinema-png-image-hd-movie-png-transparent-png.png'  className='ms-5' style={{width:'150px'}} alt=''/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav justify-content-between me-5 fw-bold" style={{ marginLeft: 'auto' }}>
                        <li className="nav-item">
                            <Link to="/Home" className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/Movie" className='nav-link'>Movie</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
  )
}



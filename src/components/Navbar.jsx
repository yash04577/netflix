import React, {useState, useContext} from 'react'
import MovieContext from '../context/MovieContext'
import logoPng from "../images/logo.png"
import {Link} from "react-router-dom"


const Navbar = () => {

  const context = useContext(MovieContext);

  const listHandler = () => {
    const b = document.getElementById("dropdown");

    if(b.style.display == "none"){
      b.style.display = "block";
    }
    else{
      b.style.display = "none";
    }

  }

  // https://api.themoviedb.org/3/search/movie?api_key=bf88552c594ba0ef3d778254b3ee4bfb&query=frozen

  const [movieName, setMovieName] = useState("");

  const nameHandler = (e) =>{
    // console.log(e.target.value)
    setMovieName(e.target.value)
  }

  const clickHandler = () => {

    context.setCurrentData(movieName);
    console.log(movieName);
    


  }

  return (
    <>
      <nav className='navbar'>
        <div className="navLogoContainer">
          <img src={logoPng} alt="" width={100} style={{ marginLeft: "2rem" }} />
        </div>
        <div className="navListContainer">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Recently Added</a></li>
            <li><a href="#">My List</a></li>
            <li>
              {/* <label htmlFor="movieName">Search here</label> */}
              <input type="text" value={movieName} onChange={nameHandler} className="searchBar" placeholder='Search movie here'/>
              <Link onClick={clickHandler} to={"/singlepage"} className="searchLink">Search</Link>
            </li>
          </ul>
        </div>
        <div className="menuBtnContainer">
          <a className='showMoreBtn' id='showMoreBtn' onClick={listHandler}>Show</a>
        </div>
        <div className="navToolkitContainer"></div>
      </nav>
    </>
  )
}

export default Navbar
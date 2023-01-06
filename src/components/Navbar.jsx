import React from 'react'
import logoPng from "../images/logo.png"

const Navbar = () => {

  const listHandler = () => {
    const b = document.getElementById("dropdown");

    if(b.style.display == "none"){
      b.style.display = "block";
    }
    else{
      b.style.display = "none";
    }

  }

  return (
    <>
      <nav className='navbar'>
        <div className="navLogoContainer">
          <img src={logoPng} alt="" width={100} style={{ marginLeft: "2rem" }} />
        </div>
        <div className="navListContainer">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Recently Added</a></li>
            <li><a href="#">My List</a></li>
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
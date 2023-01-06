import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Home = () => {

  const [upcomingList, setUpcomingList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [trendingList, setTrendingList] = useState([]);
  const [bannerPath, setBannerPath] = useState("");
  const [bannerHeading, setBannerHeading] = useState("");
  const [bannerPara, setBannerPara] = useState("");

  const upcomingUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=bf88552c594ba0ef3d778254b3ee4bfb"
  const popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=bf88552c594ba0ef3d778254b3ee4bfb"
  const trendingUrl = "https://api.themoviedb.org/3/movie/popular?api_key=bf88552c594ba0ef3d778254b3ee4bfb"
  const imgUrl = "https://image.tmdb.org/t/p/original";

  const fetchUpcoming = async () => {

    const {data} = await axios.get(upcomingUrl)
    const {results} = data
    setUpcomingList([...results]);
    // console.log(results[0].backdrop_path)
  }
  const fetchTrending = async () => {
    
    const res = await fetch(trendingUrl)
    const { results } = await res.json();
    setTrendingList([...results]);
  }
  const fetchPopular = async () => {
    
    const res = await fetch(popularUrl)
    const { results } = await res.json();
    setPopularList([...results]);
    console.log(results[0])
    setBannerPath(results[0].backdrop_path);
    setBannerHeading(results[0].original_title)
    setBannerPara(results[0].overview)

  }

  useEffect(() => {

    fetchPopular();
    fetchTrending();
    fetchUpcoming();

  }, [])

  return (
    <>  
      <div className="mainContainer">


      <div className="dropdown dropdownToggle" id='dropdown'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Recently Added</a></li>
            <li><a href="#">My List</a></li>
          </ul>
        </div>

        <div className="bannerContainer">
          <img src={`${imgUrl}/${bannerPath}`} alt="" />
          <div className="bannerData">
            <div className="bannerHeading">
                <h1 style={{color: "white"}}>{bannerHeading}</h1>
            </div>
            <div className="bannerPara">
                <p style={{color: "white"}}>{bannerPara}</p>
            </div>
            <div className="bannerBtn">
              <button className='playBtn'>Play</button>
              <button className='my_list_add_btn'>My List +</button>
            </div>
          </div>
        </div>


        <div className="trendinMoviesContainer">
          <h1 style={{ fontWeight: "600", color: "white", marginLeft:"1rem"}}>Trending Now</h1>
          <div className="moviesList">
            {
              trendingList.map((e, index) => {
                const imgPath = `https://image.tmdb.org/t/p/original` + e.poster_path;
                return (
                  <Card img={imgPath}></Card>
                )
              })
            }
          </div>
        </div>
       

        <div className="upcomingMoviesContainer">
          <h1 style={{ fontWeight: "600", color: "white", marginLeft:"1rem" }}>Upcoming</h1>
          <div className="moviesList">
            {
              upcomingList.map((e, index) => {
                const imgPath = `https://image.tmdb.org/t/p/original` + e.poster_path;
                return (
                  <Card img={imgPath}></Card>
                )
              })
            }
          </div>
        </div>
        
        <div className="popularMoviesContainer">
          <h1 style={{ fontWeight: "600" , marginLeft:"1rem"}}>Popular on Netflix</h1>
          <div className="moviesList">
            {
              popularList.map((e) => {

                const imgPath = `https://image.tmdb.org/t/p/original` + e.poster_path;

                return (
                  <Card img={imgPath}></Card>
                )
              })
            }
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home
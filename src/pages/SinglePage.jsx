import axios from 'axios';
import React, {useState, useContext, useEffect} from 'react'
import Card from '../components/Card';
import MovieContext from '../context/MovieContext';



const SinglePage = () => {

    const context = useContext(MovieContext);

    const previousData = context.getData();

    const [More, setMore] = useState({});
    const [bannerPath, setBannerPath] = useState("");
    const [bannerHeading, setBannerHeading] = useState("");
    const [bannerPara, setBannerPara] = useState("");
    const imgUrl = "https://image.tmdb.org/t/p/original";

    const getMovie = async() => {

        const url = `https://api.themoviedb.org/3/search/movie?api_key=bf88552c594ba0ef3d778254b3ee4bfb&query=${context.getData()}`
        const {data} = await axios.get(url);
        const {results} = data;
        setMore([...results]);
        setBannerHeading(results[0].original_title)
        setBannerPara(results[0].overview)
        setBannerPath(results[0].backdrop_path)
    }

    useEffect(() => {
        getMovie();
    }, [])
    
    const currentData = context.getData();

    console.log("pre = ", previousData)
    console.log("curr = ", currentData)

    return (
        <>
           
            <div className="bannerContainer">
                <img src={`${imgUrl}/${bannerPath}`} alt="" />
                <div className="bannerData">
                    <div className="bannerHeading">
                        <h1 style={{ color: "white" }}>{bannerHeading}</h1>
                    </div>
                    <div className="bannerPara">
                        <p style={{ color: "white" }}>{bannerPara}</p>
                    </div>
                    <div className="bannerBtn">
                        <button className='playBtn'>Play</button>
                        <button className='my_list_add_btn'>My List +</button>
                    </div>
                </div>
            </div>

{/* 
        <div className="upcomingMoviesContainer">
          <h1 style={{ fontWeight: "600", color: "white", marginLeft:"1rem" }}>More</h1>
          <div className="moviesList">
            {
              More.map((e, index) => {
                const imgPath = `https://image.tmdb.org/t/p/original` + e.poster_path;
                return (
                  <Card img={imgPath}></Card>
                )
              })
            }
          </div>
        </div>
         */}
        </>
    )
}

export default SinglePage
import react, {useState} from "react"
import MovieContext from "./MovieContext"

const MoviesState = (props) => {

    const [data, setData] = useState("");


    const getData = () =>{
        return data
    }

    const setCurrentData = (testData) =>{
        setData(testData)
    }

    return (
        <MovieContext.Provider value={{getData, setCurrentData}}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MoviesState;
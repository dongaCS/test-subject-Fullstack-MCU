import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function OneMovie() {
    const { title } = useParams();
    const [movie, setMovie] = useState({ 
        title: "", 
        year: 0,
        cast: [],
        genres: [],
        extract: "",
        thumbnail: "",
    })

    useEffect(() => {
        async function loadMovie() {
            const res = await fetch(`${process.env.REACT_APP_MCU_URL}/api/movie/${title}`)
            const data = await res.json();
            setMovie(data.payload);
        }
        loadMovie();
    }, [title])

    return movie ? 
    (   <div className='movie'>
            <div className='left'>
                <h1> {movie.title} </h1>
                <img src={movie.thumbnail} alt="poster.jpg"></img>
                <p> Year: <b>{movie.year}</b> </p>
            </div>
            <div className='right'>
                <p> <b>Summary</b>: {movie.extract} </p>
                <span> <b> Cast: </b></span> {movie.cast.map(e => <span key={e}> {e}, </span>)}
                <p></p>
                <span><b> Genres:  </b> </span> {movie.genres.map(e => <span key={e}> {e}, </span>)}

            </div>
        </div>
    ) :  ( <h1> No movie found </h1> ); // holy ternary

}


export default OneMovie;
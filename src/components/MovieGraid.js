import React from 'react'
import Movie from './Movie'

const MovieGraid = props =>{
    const movies = props.movies.slice(0,props.limit)
    const movieList = movies.map(movie => {
        return  <Movie 
        key={movie.posterPath}
        movie={movie} />

    })
    return(
        <section className={`section movies slider has-arrows ${props.gridType}`}>
                <h3 className='section-title'>{props.title}</h3>
                <ul className='moviesGrid'  id='scrollbar'>
                   {movieList}
                </ul>
        </section>
    )
}

export default MovieGraid;
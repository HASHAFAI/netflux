import React from 'react'

const trimExtension = filename => filename.split('.').slice(0, -1)[0];;
const Movie = props =>{

        return (
                    <li className='movie'>
                    <a href={`/details${trimExtension(props.movie.posterPath)}`}>
                          <img src={`https://image.tmdb.org/t/p/w200${props.movie.posterPath}`}
                           alt={props.movie.originalTitle} 
                           />
                            <span className='movie-description'>
                            {props.movie.movieLanguages[0].title}
                            <span className='play-icon'>
                            {props.movie.voteAverage} التقييم
                            </span>
                            </span>
                        </a>
                    </li>
        )
}

export default Movie;
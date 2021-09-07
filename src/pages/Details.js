import React from 'react';
import { getMovieTitle, getMovieOverview } from '../utils/helper';


class Details extends React.Component {

  render() {
    const movieId = this.props.match.params.id;
    const movie = this.props.movies.find(movie => movie.posterPath.includes(movieId))
    const genres = movie.genres.join(" | ");
    const language = (movie.language == 'en' ) ? 'الانكليزية' :'العربية';
    return (
      <>
        <section className="section hero movieDetails has-bullets">
          <div className="container">
            <div className="movieVideo">
              <iframe src={`https://www.youtube.com/embed/${movie.movieVideos.key}`}
                frameBorder='0'
                title='video'
              />
            </div>
            {/* <div className="movieDetails container">
              <h2 className="featured-title">{getMovieTitle(movie)}</h2>
              <p className="featured-overview">{getMovieOverview(movie)}</p>
              <p className="movie-general-data">{movie.releaseDate}</p>
            </div> */}
          </div>
        </section>

        <section className="section movie-meta-data">
          <div className="container">
            {/* <h3 className="section-title">{`${getMovieTitle(movie)}`}</h3> */}
            <div className="plot">
              <h3 className="section-title">{`${getMovieTitle(movie)}`}</h3>
              <p>{getMovieOverview(movie)}</p>
            </div>
            <ul>
              <li>
                <span className="title">النوع</span>
                <span className="values">{genres}</span>
                <span className="title">تاريخ الاصدار</span>
                <span className="values">{movie.releaseDate}</span>
                <span className="title">عدد المشاهدات</span>
                <span className="values">{movie.popularity}</span>
                <span className="title">التقييم</span>
                <span className="values">{movie.voteAverage}</span>
                <span className="title">اللغة</span>
                <span className="values">{language}</span>
              </li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default Details;
export const getMovieTitle = (movie) => {
    return (movie.movieLanguages[0]) ? movie.movieLanguages[0].title : movie.originalTitle;
  }
  
  export const getMovieOverview = (movie) => {
    return (movie.movieLanguages[0]) ? movie.movieLanguages[0].overview : movie.originalOverview;
  }
  
  export const suggestedMovies = (data) => {
    return data.filter(movie => movie.originalTitle);
  }
  
  export const mostViwed = (data) => {
    const moviesCopy = [...data];
    return moviesCopy.sort((movie1, movie2) => movie1.popularity > movie2.popularity ? -1 : 1);
  }
  
  export const recentRelease = (data, category) => {
    const moviesCopy = [...data];
    const filteredDate = moviesCopy.filter(movie => movie.category === category);
    return filteredDate.sort((date1, date2) => new Date(date1.releaseDate) > new Date(date2.releaseDate) ? -1 : 1);
  }
  export const recentRelease2 = (data, category) => {
    const moviesCopy = [...data];
    const filteredDate = moviesCopy.filter(movie => movie.language === category);
    return filteredDate.sort((date1, date2) => new Date(date1.releaseDate) < new Date(date2.releaseDate) ? -1 : 1);
  }
import React from 'react';
import MovieGrid from "../components/MovieGraid";

class SearchPage extends React.Component {
  state = {
    searchTerm: ""
  }
  render() {
    const searchResult = this.props.movies.filter((movie) => {
    const regex = new RegExp(this.props.match.params.keyword, 'gi');
      //TODO Tony: Maybe let's extend the search here to include movie description in both languages ;-)
      let ret = false;
      if (
        movie.originalTitle.match(regex)
        || movie.originalOverview.match(regex)
        || (
            movie.movieLanguages[0] &&
            (
              movie.movieLanguages[0].title.match(regex)
              || movie.movieLanguages[0].overview.match(regex)
            )
          )
      ) {
        return true;
      }
    });
    return (<MovieGrid
      gridType="search-results"
      title={`نتيجة البحث عن ${this.props.match.params.keyword}`}
      limit={searchResult.length}
      movies={searchResult}
      history={this.props.history}
    />);
  }
}

export default SearchPage;
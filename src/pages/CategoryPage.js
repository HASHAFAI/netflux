import React from 'react';

import MovieGrid from "../components/MovieGraid";
import Filter from '../components/Filter';

import { suggestedMovies, mostViwed, recentRelease } from '../utils/helper';


class CategoryPage extends React.Component {
  state = {
    filter: null,
  }

  onFilter = (value) => {
    // TODO Athough: Do you think it's a good idea to keep the filters also in the URL ? maybe this is a good idea for an excersise that the students can do according to what we did in the search ;-)
    this.setState({ filter: value })
  }

  renderMoviesGrid = () => {
    return (
      <>
        <MovieGrid
          gridType="is-suggested"
          title="إقتراحتنا لك"
          limit={4}
          movies={suggestedMovies(this.props.movies)}
        />
        <MovieGrid
          gridType="is-suggested"
          title="الأكثر مشاهدة"
          limit={4}
          movies={mostViwed(this.props.movies)}
        />
        <MovieGrid
          gridType="is-suggested"
          title={`أحدث ${this.props.typeText}`}
          limit={32}
          movies={recentRelease(this.props.movies, this.props.type)}
        />
      </>
    );
  }

  renderFilterResult = () => {
    const filteredMovies = this.props.movies.filter(movie => movie.genres.includes(this.state.filter))
    return (
      <MovieGrid
        gridType="is-suggested"
        // TODO Athough: What do you think about this ? Here we can use a helper function with a switch to translate english names into arabic names ex. Thriller => أفلام الغموض أو مسلسلات الغموض
        title={this.state.filter}
        movies={filteredMovies}/>
    )
  }

  render() {
    return (
      <>
        <Filter type={this.props.typeText} optionText={this.props.optionText} onSelectChange={this.onFilter} />
        {this.state.filter ? this.renderFilterResult() : this.renderMoviesGrid()}
      </>
    );
  }
}

export default CategoryPage;
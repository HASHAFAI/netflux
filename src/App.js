import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import SearchPage from './pages/SearchPage'
import Details from './pages/Details'
import Data from './data/movies.json'

  
// document.querySelector('.navbar-item').onclick = function(){
//   // document.querySelector('.navbar-item').remove.classList('active');
//   this.classList.add('active');
// }
//   document.querySelector('#nav-nav .navbar-item').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

class App extends React.Component {
  state = {
    movies : Data
}
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="container">
            <Header/>
            <>
            <Route exact path='/' render={props => {
              return(
                <HomePage {...props} movies={this.state.movies} />
              )
            }} />

            <Route exact path='/movies' render={props => {
              return(
                <CategoryPage 
                {...props} 
                type='Film' 
                typeText='أفلام'
                optionText = 'نوع الافلام' 
                movies={this.state.movies} />
              )
            }} />

            <Route exact path='/Series' render={props => {
              return(
                <CategoryPage 
                {...props} 
                type='Series' 
                typeText='مسلسلات'
                optionText = 'نوع المسلسلات' 
                movies={this.state.movies} />
              )
            }} />

            <Route exact path='/details/:id' render={props => {
              return(
                <Details {...props} movies={this.state.movies}/>
              )
            }} />

            <Route exact path='/search/:keyword' 
            render = {props => <SearchPage {...props} movies = {this.state.movies} />}
             />

            </>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

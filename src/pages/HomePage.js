import React from 'react'
import Hero from './../components/Hero'
import MovieGraid from './../components/MovieGraid'
import {suggestedMovies, mostViwed, recentRelease, recentRelease2} from './../utils/helper'

class HomePage extends React.Component{

    render(){
        return(
            <>
         <Hero/>
         <MovieGraid 
            title='أقتراحتنا لك' 
            gridType='is-suggested'
            movies={suggestedMovies(this.props.movies)}
            limit={8}
            />
          <MovieGraid
             title='الاكثر مشاهدات' 
             gridType='is-suggested'
             movies={mostViwed(this.props.movies)}
             limit={8}
             />
          <MovieGraid 
            title='الافلام الحديثة' 
            gridType='is-suggested'
            movies={recentRelease(this.props.movies, 'Film')}
            limit={8}
            />
          <MovieGraid 
            title='أحدث المسلسلات' 
            gridType='is-suggested'
            movies={recentRelease2(this.props.movies, 'en')}
            limit={8}
            />
         </>
         )
    }
}

export default HomePage
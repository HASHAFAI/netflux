import React from 'react';
import { withRouter } from "react-router";
import Logo from './Logo';
import MenuBar from "./MenuBar";

class Header extends React.Component {
  state = {
    searchTerm: '',
  }
  onChangeHandler = (e) => {
    if (e.target.value) {
      this.setState({
        searchTerm: e.target.value,
        origin: this.props.location.pathname.includes('/search') ? this.state.origin : this.props.location.pathname,
      });
      return this.props.history.push(`/search/${e.target.value}`);
    } else {
      this.setState({
        searchTerm: ''
      });
      return this.props.history.push(this.state.origin);
    }
  }
  render() {
    return (
      <header className="section" role="navigation">
        <div className="container">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="navbar-burger" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <Logo />
          <MenuBar active="active"/>
          <div className="navbar-search">
            <button><i className="fas fa-search"></i></button>
            <input defaultValue={this.state.searchTerm} className="searchInput" type="text" name="search" placeholder="إبحث عن فيلم أو مسلسل..." onChange={this.onChangeHandler}/>
					</div>
      </div>
		</header>
    );
  }
}

export default withRouter(Header);
import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink activeClassName='saved-active' style={{color: 'slategrey', textDecoration: 'none'}} to={`/movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}
    <div className = 'home-button'>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/'>Home</Link>
    </div>
  </div>
);

export default SavedList;

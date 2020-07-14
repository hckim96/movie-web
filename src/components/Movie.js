import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

export default (props) => {
    console.log(props);
    return (
        <div className='movie-movie'>
            <Link to={`/${props.movie.id}`}>
                <img src={props.movie.medium_cover_image} />
            </Link>
            <div className='movie-title'>{props.movie.title_long}</div>
        </div>
    );
};

import React from 'react';
import './Home.css';
import './Detail.css';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Movie from '../components/Movie';
const GET_MOVIES = gql`
    {
        Movies {
            id
            title
            title_long
            medium_cover_image
        }
    }
`;

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    console.log(loading, error, data);
    return (
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-title'>movie-web app</h1>
            </div>

            <div className='home-movie-container'>
                {loading && <div>Loading...</div>}
                {!loading &&
                    data.Movies &&
                    data.Movies.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    );
};

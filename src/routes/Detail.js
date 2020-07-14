import React from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import './Detail.css';
import Movie from '../components/Movie';
const GET_DETAIL = gql`
    query getMovie($id: Int!) {
        Movie(id: $id) {
            id
            title
            title_long
            description_intro
            rating
            medium_cover_image
        }
        Suggestions(id: $id) {
            id
            title
            title_long
            medium_cover_image
        }
    }
`;
export default () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_DETAIL, {
        variables: { id: parseInt(id) },
    });
    console.log(data);
    return (
        <div className='detail-container'>
            {loading && <span className='detail-loading'>Loading...</span>}
            {!loading && data && (
                <div>
                    <div className='detail-notloading-container'>
                        <div className='detail-left'>
                            <h1 className='detail-notloading-description-title'>
                                {data.Movie.title_long}
                            </h1>
                            <div className='detail-notloading-description-intro'>
                                {data.Movie.description_intro}
                            </div>
                        </div>
                        <div className='detail-right'>
                            <img src={data.Movie.medium_cover_image} />
                        </div>
                    </div>
                    <h1>Suggestions</h1>
                    <div className='detail-suggestions'>
                        {data.Suggestions.map((movie) => (
                            <Movie movie={movie}></Movie>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

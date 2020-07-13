import React from 'react';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIES = gql`
    {
        Movies {
            title
            id
        }
    }
`;

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    console.log(loading, error, data);

    return <h1>home</h1>;
};

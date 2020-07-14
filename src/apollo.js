import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    // uri: 'http://hc-yts-graphql-api.herokuapp.com:4000/graphql',
    uri: 'http://localhost:4000/graphql',
    // uri: '/graphql',
});

export default client;

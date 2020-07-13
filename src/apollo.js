import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    // uri: 'http://hc-yts-graphql-api.herokuapp.com/graphql',
    uri: 'http://localhost:4000/graphql',
});

export default client;

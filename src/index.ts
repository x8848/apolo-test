const { ApolloServer, gql } = require('apollo-server-lambda');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => '32323 TTTT world! env: ' + process.env.NODE_ENV + ' secret: ' + process.env.SECRET,
  },
};

const server = new ApolloServer({ typeDefs, resolvers })

export const graphqlHandler = server.createHandler({ cors: { origin: true, credentials: true } })

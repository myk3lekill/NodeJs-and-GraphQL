const express = require('express');

const { createSchema } = require('graphql-yoga');

const schema = createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        description: String
        price: Float
      }
    `,
    resolvers: {
      Query: {
        description: () => 'Red Shoe',
        price: () => 42.12,
      }
    }
  });

const app = express();


app.listen(3000, () => {
    console.log('Running GraphQL server...')
});
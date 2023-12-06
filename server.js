const express = require('express');
const { createSchema } = require('graphql-yoga');
const { createYoga } = require('graphql-yoga');

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

  const yoga = createYoga({
    schema,
    context: (req) => ({ // Context factory gets called for every request
        //myToken: req.headers.get('authorization') // I've commented this line because it was causing problems and it seems to work :)
    }),
    graphiql: true,
  })

const app = express();


app.listen(3000, () => {
    console.log('Running GraphQL server...')
});
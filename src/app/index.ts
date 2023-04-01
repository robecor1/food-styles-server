import {schema} from '../graphQL/schema'
import {controller} from '../graphQL/controller'

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: controller,
    graphiql: true,
    cacheControl: {
      defaultMaxAge: 0,
      stripFormattedExtensions: false,
      calculateHttpHeaders: false,
    },
  })
);

app.listen(4000, () => {
  console.log("Hello world")
});
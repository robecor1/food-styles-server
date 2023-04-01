import {schema} from '../grapgQL/schema'
import {controller} from '../grapgQL/controller'

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: controller,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Hello world")
});
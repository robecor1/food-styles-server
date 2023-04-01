import {buildSchema} from "graphql/index";

export const schema = buildSchema(`
  type Query {
    myQuery: String
  }
`);

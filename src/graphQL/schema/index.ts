import {buildSchema} from "graphql";
// import globalSchema from "./schema.graphql"

export const schema = buildSchema(`schema { 
  query: Query 
  mutation: Mutation   
}

type Mutation {
  myMutation: String
}

type Query {
  myQuery: String
}
`);

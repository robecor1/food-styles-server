import {makeExecutableSchema} from "@graphql-tools/schema";
import types from "./types"
import queries from "./queries"
import mutations from "./mutations"

export const schema = makeExecutableSchema({
  typeDefs: [
    ...types,
    ...queries,
    ...mutations,
  ]
});

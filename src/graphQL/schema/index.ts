import {buildSchema} from "graphql";
import globalSchema from "./schema.graphql"
export const schema = buildSchema(globalSchema);

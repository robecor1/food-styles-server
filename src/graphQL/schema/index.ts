import { gql } from 'graphql-tag';
import globalSchema from "./schema.graphql"

export const schema = gql`${globalSchema}`;

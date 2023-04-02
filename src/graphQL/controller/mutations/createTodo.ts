import {CreateToDoInput, CreateToDoOutput} from "../../schema/@types";

export const createTodo = (input: CreateToDoInput): CreateToDoOutput => {
  return {success: true}
}
import {DeleteToDoOutput} from "../../schema/@types";

export const deleteTodo = (id: string): DeleteToDoOutput => {
  return {success: true}
}
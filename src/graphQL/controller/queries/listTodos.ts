import {ListToDoInput, ToDo} from "../../schema/@types";

export const listTodos = (input: ListToDoInput): ToDo[] => {
  return [{
    id: 1,
    title: "title",
    completed: true
  }] as ToDo[]
}
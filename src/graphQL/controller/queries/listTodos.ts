import {ListToDoInput} from "../../schema/@types";

export const listTodos = (input: ListToDoInput) => {
  return [{
    id: 1,
    title: "title",
    completed: true
  }]
}
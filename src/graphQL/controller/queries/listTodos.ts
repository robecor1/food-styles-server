import {ListToDoInput, ToDo as ToDoType} from "../../schema/@types";
import { listTodos as dbListTodo, ToDo } from "../../../dataset/toDo"

export const listTodos = async (data: {input: ListToDoInput}): Promise<ToDoType[]> => {
  await ToDo.sync()
  const todos = await dbListTodo(data?.input && {completed: !!data.input.completed})
  return todos || [] as ToDoType[]
}
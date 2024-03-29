import {CreateToDoInput, CreateToDoOutput} from "../../schema/@types";
import { createTodo as dbCreateTodo, ToDo } from "../../../dataset/toDo"

export const createTodo = async (data: {input: CreateToDoInput }): Promise<CreateToDoOutput> => {
  try {
    await ToDo.sync()
    await dbCreateTodo(data.input.title)
    return {success: true}
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}
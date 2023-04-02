import {UpdateToDoInput, UpdateToDoOutput} from "../../schema/@types";
import {updateTodo as dbUpdateTodo, ToDo} from "../../../dataset/toDo"

export const updateToDo = async (data: { input: UpdateToDoInput }): Promise<UpdateToDoOutput> => {
  try {
    await ToDo.sync()
    await dbUpdateTodo(data.input.id as number, {completed: data.input.completed})
    return {success: true}
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}
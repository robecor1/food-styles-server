import {DeleteToDoOutput} from "../../schema/@types";
import {deleteTodo as dbDeleteToDo, ToDo} from "../../../dataset/toDo"

export const deleteTodo = async (data: {id: string}): Promise<DeleteToDoOutput> => {
  try {
    await ToDo.sync()
    await dbDeleteToDo(Number(data.id))
    return {success: true}
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}
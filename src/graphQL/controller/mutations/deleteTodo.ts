import {DeleteToDoOutput} from "../../schema/@types";
import { deleteTodo as dbDeleteToDo, ToDo } from "../../../dataset/toDo"

export const deleteTodo = async (data: {id: string}): Promise<DeleteToDoOutput> => {
  await ToDo.sync()
  await dbDeleteToDo(Number(data.id))
  return {success: true}
}
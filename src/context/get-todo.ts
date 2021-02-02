import { v4 as uuid } from "uuid"
import { ToDoStatusTypes } from "./constants"

export const generateTodo = () => {
  return { name: "", status: ToDoStatusTypes.IsNew, id: uuid() }
}

import { isNew } from "./constants"
import { v4 as uuid } from "uuid"

export const generateTodo = () => {
  return { name: "", status: isNew, id: uuid() }
}

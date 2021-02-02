import TodoStatus from "components/TodoStatus/TodoStatus"
import { delTodo, ITodo, useToDoList } from "context/context.todo"
import * as React from "react"
import { TodoItem } from "./styles"

interface TodoProps extends ITodo, React.ComponentProps<any> {
  index: number
}

const Todo = ({ id, name, status, index }: TodoProps) => {
  const { dispatch } = useToDoList()
  const delHandler = () => delTodo(dispatch, id)
  const className = `todo is-${status}`
  return (
    <TodoItem className={className}>
      <span className="todo__index">{index + 1}.</span>
      <strong className="todo__name">{name}</strong>
      <span className="todo__operations">
        <TodoStatus id={id} status={status} className="todo-status" />
        <button onClick={delHandler}>x</button>
      </span>
    </TodoItem>
  )
}

export default React.memo(Todo)

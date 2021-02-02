import Todo from "components/Todo/Todo"
import { ITodo } from "context"
import * as React from "react"

interface TodoListProps extends React.ComponentProps<any> {
  todos: ITodo[]
}
const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo: ITodo, index: number) => (
        <li key={todo.id}>
          <Todo {...todo} index={index} />
        </li>
      ))}
    </ul>
  )
}

export { TodoList }

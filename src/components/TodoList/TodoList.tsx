import * as React from "react";
import { ITodo } from "../../context";
import Todo from "../Todo/Todo";

interface TodoListProps extends React.ComponentProps<any> {
  todos: ITodo[];
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
  );
};

export { TodoList };

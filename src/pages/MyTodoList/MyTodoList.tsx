import * as React from "react"
import { Link } from "react-router-dom"
import { TodoList, useToDoList } from "../../context"
import { SubmitButton, Title } from "../../styles/styles"
import { NothingTodo } from "./styles"

const MyTodoList = () => {
  const {
    state: { todos },
  } = useToDoList()

  if (todos.length) {
    return (
      <section>
        <Title>My To Do List</Title>
        <TodoList todos={todos} />
      </section>
    )
  }
  return (
    <section>
      <Title className="title">My Todo List</Title>
      <NothingTodo>You get no todo today</NothingTodo>
      <Link to="/add">
        <SubmitButton>Add Todo </SubmitButton>
      </Link>
    </section>
  )
}

export default MyTodoList

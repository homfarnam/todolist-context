import * as React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { TodoList, useToDoList } from "../context"
import { SubmitButton, Title } from "./AddTodo"

const NothingTodo = styled.p`
  font-size: 18px;
`

const MyTodoList = () => {
  const [todoList] = useToDoList()
  if (todoList.length) {
    return (
      <section>
        <Title>My To Do List</Title>
        <TodoList todos={todoList} />
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

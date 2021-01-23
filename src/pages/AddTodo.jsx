import { useToDoList, addTodo, generateTodo } from "../context"
import { useHistory } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"

export const Title = styled.h2`
  font-variant: petite-caps;
  font-size: 30px;
`

const Label = styled.label`
  font-size: 18px;
`

export const SubmitButton = styled.button`
  color: #494949 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: blanchedalmond;
  padding: 5px;
  border: 4px solid #494949 !important;
  display: inline-block;
  transition: all 0.4s ease 0s;
  width: 100px;

  :hover {
    color: #ffffff !important;
    background: #f6b93b;
    border-color: black !important;
    transition: all 0.4s ease 0s;
  }
`

const AddTodo = () => {
  const [todo, setTodo] = useState(() => generateTodo())
  const history = useHistory()
  const [, dispatch] = useToDoList()
  const submitHandler = (e) => {
    e.preventDefault()
    if (!todo.name) {
      return window.alert("Please provide to do name.")
    }
    addTodo(dispatch, todo)
    setTimeout(() => {
      history.push("/")
    }, 10)
  }
  const changeHandler = (e) => {
    const name = e.target.value
    setTodo((todo) => ({ ...todo, name }))
  }
  return (
    <div>
      <Title>Add New Todo</Title>
      <form onSubmit={submitHandler} name="addTodo">
        <p>
          <Label htmlFor="name">Todo Name: </Label>
          <input type="text" name="nam" id="name" onChange={changeHandler} />
        </p>
        <p>
          <SubmitButton type="submit">submit</SubmitButton>
        </p>
      </form>
    </div>
  )
}

export default AddTodo

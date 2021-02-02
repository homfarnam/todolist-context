import { useToDoList, addTodo, generateTodo } from "../../context"
import { useHistory } from "react-router-dom"
import { useState } from "react"
import { SubmitButton, Title } from "../../styles/styles"
import { Label } from "./styles"

const AddTodo = () => {
  const [todo, setTodo] = useState(() => generateTodo())
  const history = useHistory()
  const { dispatch } = useToDoList()
  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!todo.name) {
      return window.alert("Please provide to do name.")
    }
    addTodo(dispatch, todo)
    setTimeout(() => {
      history.push("/")
    }, 10)
  }
  const changeHandler = (e: { target: { value: any } }) => {
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

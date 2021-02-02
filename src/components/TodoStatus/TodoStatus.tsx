import { ToDoStatusTypes } from 'context/constants'
import { ITodo, updateDoTo, useToDoList } from "context/context.todo"

interface TodoStatusProps extends Pick<ITodo, "id" | "status">, React.ComponentProps<any> {
  className?: string
}

const TodoStatus = ({ id, status, className = "todo-status" }: TodoStatusProps) => {
  const { dispatch } = useToDoList()
  const onChange = (e: { target: { value: any } }) => {
    const status = e.target.value
    updateDoTo(dispatch, {
      id,
      status,
    })
    return false
  }
  return (
    <select name={id} value={status} onChange={onChange} className={className}>
      {Object.values(ToDoStatusTypes).map((status) => (
        <option value={status} key={status}>
          {status}
        </option>
      ))}
    </select>
  )
}

export default TodoStatus

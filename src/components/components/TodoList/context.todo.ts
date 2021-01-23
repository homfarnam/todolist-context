import { createContext, useReducer } from "react"

const TodoListContext = createContext({})
TodoListContext.displayName = "TodoListContext"

function todoReducer(state = [], action: any) {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.todo]
    }
    case "UPDATE_TODO": {
      const { todoId, todoUpdate } = action
      let todoIndex = -1
      const todo = state.find((todo, index) => {
        if (todoId === todo.id) {
          todoIndex = index
          return todo
        }
        return null
      })
      if (!todo) return [...state]
      state[todoIndex] = { ...todo, ...todoUpdate }
      return [...state]
    }
    case "DEL_TODO": {
      const remainTodos = state.filter((todo) => todo.id !== action.todo.id)
      return [...remainTodos]
    }
    default:
      throw new Error(`Unkown action type:${action.type}`)
  }
}

function TodoListProvider(props) {
  const [state, dispatch] = useReducer(todoReducer, [])
  const value = [state, dispatch]
  return <TodoListContext.Provider value={value} {...props} />
}

function useToDoList() {
  const context = useContext(TodoListContext)
  if (context === undefined) {
    throw new Error(`useTodoList can only be used inside <TodoListProvider />`)
  }
  return context
}

function updateDoTo(
  dispatch: (arg0: { type: string; todoId: any; todoUpdate: any }) => void,
  id: any,
  update: { status: any }
) {
  dispatch({
    type: "UPDATE_TODO",
    todoId: id,
    todoUpdate: update,
  })
}

function addTodo(
  dispatch: (arg0: { type: string; todo: any }) => void,
  todo: any
) {
  dispatch({ type: "ADD_TODO", todo })
}

function delTodo(
  dispatch: (arg0: { type: string; todo: any }) => void,
  todo: { id: any }
) {
  dispatch({ type: "DEL_TODO", todo })
}

export { TodoListProvider, useToDoList, updateDoTo, addTodo, delTodo }

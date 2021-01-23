import { createContext, useContext, useReducer } from "react"

const TodoListContext = createContext()
TodoListContext.displayName = "TodoListContext"

const todoReducer = (state = [], action) => {
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

const TodoListProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, [])
  const value = [state, dispatch]
  return <TodoListContext.Provider value={value} {...props} />
}

const useToDoList = () => {
  const context = useContext(TodoListContext)
  if (context === undefined) {
    throw new Error(`useTodoList can only be used inside <TodoListProvider />`)
  }
  return context
}

const updateDoTo = (dispatch, id, update) => {
  dispatch({
    type: "UPDATE_TODO",
    todoId: id,
    todoUpdate: update,
  })
}

const addTodo = (dispatch, todo) => {
  dispatch({ type: "ADD_TODO", todo })
}

const delTodo = (dispatch, todo) => {
  dispatch({ type: "DEL_TODO", todo })
}

export { TodoListProvider, useToDoList, updateDoTo, addTodo, delTodo }

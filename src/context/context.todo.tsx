import {
  createContext,
  Dispatch,
  Reducer,
  useContext,
  useMemo,
  useReducer,
} from "react"
import { AactionTypes } from "./constants"
export interface ITodo {
  id: string
  name: string
  status: string
}

export type TodoAction =
  | { type: AactionTypes.AddTodo; payload: ITodo }
  | { type: AactionTypes.DeleteTodo; payload: string }
  | { type: AactionTypes.UpdateTodo; payload: Pick<ITodo, "id" | "status"> }

export interface State {
  todos: ITodo[]
}

interface ContextValue {
  state: State
  dispatch: Dispatch<TodoAction>
}

const initialState = {
  todos: [],
}

const TodoListContext = createContext<ContextValue>({
  state: initialState,
  dispatch: () => {},
})

TodoListContext.displayName = "TodoListContext"

const todoReducer = (
  state: State = initialState,
  action: TodoAction
): State => {
  switch (action.type) {
    case AactionTypes.AddTodo: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            name: action.payload.name,
            status: action.payload.status,
          },
        ],
      }
    }
    case AactionTypes.UpdateTodo: {
      return {
        ...state,
        todos: state.todos.map((existingTodo) =>
          existingTodo.id === action.payload.id
            ? {
                ...existingTodo,
                ...action.payload,
              }
            : existingTodo
        ),
      }
    }
    case AactionTypes.DeleteTodo: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      }
    }
    default: {
      throw new Error(`Unkown action type:${action}`)
    }
  }
}

const TodoListProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer<Reducer<any, TodoAction>>(
    todoReducer,
    initialState
  )
  const value = useMemo(() => ({ state, dispatch }), [state])
  return <TodoListContext.Provider value={value} {...props} />
}

const useToDoList = () => {
  const context = useContext(TodoListContext)
  if (context === undefined) {
    throw new Error(`useTodoList must be used inside <TodoListProvider />`)
  }
  return context
}

const addTodo = (dispatch: Dispatch<TodoAction>, todo: ITodo) => {
  dispatch({
    type: AactionTypes.AddTodo,
    payload: todo,
  })
}

const updateDoTo = (
  dispatch: Dispatch<TodoAction>,
  update: Pick<ITodo, "id" | "status">
) => {
  dispatch({
    type: AactionTypes.UpdateTodo,
    payload: update,
  })
}

const delTodo = (dispatch: Dispatch<TodoAction>, todoId: string) => {
  dispatch({ type: AactionTypes.DeleteTodo, payload: todoId })
}

export { TodoListProvider, useToDoList, updateDoTo, addTodo, delTodo }

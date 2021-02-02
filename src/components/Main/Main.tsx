import { TodoListProvider } from "context"
import NotFound from "pages/NotFound/NotFound"
import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { StyledMain } from "./styles"

const Main: React.FC = ({ children }) => {
  return (
    <StyledMain>
      <TodoListProvider>
        <Switch>
          {children}
          <Route path="*" component={NotFound} exact />
        </Switch>
      </TodoListProvider>
    </StyledMain>
  )
}

export default Main

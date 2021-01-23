import { NavLink, Route } from "react-router-dom"
import styled from "styled-components"
import Main from "./components/components/Main"
import Form from "./components/Form/Form"
import Nav from "./components/Nav/Nav"
import AddTodo from "./pages/AddTodo"
import MyTodoList from "./pages/MyTodoList"

const MyApp = styled.div`
  background-color: white;
  margin: 0;
`

const Header = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 100%;
`

const App = () => {
  return (
    <>
      {/* <MyApp>
        <Header>React Context App</Header>
        <Nav />
        <Form />
      </MyApp> */}

      <Header>
        <NavLink to="/" activeClassName="active-nav" exact>
          home
        </NavLink>
        <NavLink to="/add" activeClassName="active-nav">
          add todo
        </NavLink>
      </Header>
      <Main>
        <Route path="/" component={MyTodoList} exact />
        <Route path="/add" component={AddTodo} />
      </Main>
    </>
  )
}

export default App

import * as React from "react";
import { NavLink, Route } from "react-router-dom";
import { Header } from "./components/Header/styles";
import Main from "./components/Main/Main";
import AddTodo from "./pages/AddTodo/AddTodo";
import MyTodoList from "./pages/MyTodoList/MyTodoList";

const App = () => {
  return (
    <>
      <Header>
        <NavLink to="/" activeClassName="active-nav" exact>
          Home
        </NavLink>
        <NavLink to="/add" activeClassName="active-nav">
          Add Todo
        </NavLink>
      </Header>
      <Main>
        <Route path="/" component={MyTodoList} exact />
        <Route path="/add" component={AddTodo} />
      </Main>
    </>
  );
};

export default App;

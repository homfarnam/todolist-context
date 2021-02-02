import styled from "styled-components"

export const TodoItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  .todo__index {
    margin-right: 16px;
  }
  .todo__status {
    margin-left: 16px;
  }
  .todo__operations {
    min-width: 76px;
  }
  &.is-doing {
    color: red;
  }
  &.is-done {
    color: green;
  }
  h4 {
    margin: 0;
  }
`

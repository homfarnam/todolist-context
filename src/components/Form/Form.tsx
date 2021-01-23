import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  color: black;
`

const Form = () => {
  return (
    <Container>
      <div>
        <input type="text" placeholder="Enter your new Item" />
        <button>Add</button>
      </div>
    </Container>
  )
}

export default Form

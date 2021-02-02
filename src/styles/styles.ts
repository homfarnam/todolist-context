import styled from "styled-components"

const Title = styled.h2`
  font-variant: petite-caps;
  font-size: 30px;
`

const SubmitButton = styled.button`
  color: #494949 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: blanchedalmond;
  padding: 5px;
  border: 4px solid #494949 !important;
  display: inline-block;
  transition: all 0.4s ease 0s;
  width: 100px;

  :hover {
    color: #ffffff !important;
    background: #f6b93b;
    border-color: black !important;
    transition: all 0.4s ease 0s;
  }
`

export { Title, SubmitButton }

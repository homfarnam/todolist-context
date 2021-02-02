import styled from "styled-components"

export const Header = styled.header`
  padding: 12px 0;
  @media screen and(max-width:640px) {
    margin-left: -12px;
    margin-right: -12px;
  }
  a {
    padding: 6px 12px;
    &.active-nav {
      background: #eeee;
    }
  }
`

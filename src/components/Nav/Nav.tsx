import { useState } from "react"
import styled from "styled-components"

interface NavProps {}

export const Nav: React.FC<NavProps> = () => {
  return (
    <div>
      <h3>Farnam</h3>
      <p>List of Movies:</p>
    </div>
  )
}

export default Nav

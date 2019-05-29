import styled from "styled-components"

const H1 = styled.h1`
  font-size: ${({ isBig }) => (isBig ? "5em" : "3em")};
  color: ${({ isYellow }) => (isYellow ? "yellow" : "white")};
`

export default H1

import styled from "styled-components"

const Button = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 40px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.gabo};
  font-size: 1em;
  font-weight: 800;
  transition: box-shadow 0.3s ease;

  ${({ theme }) => theme.media.desktop} {
    background: ${({ theme }) => theme.colors.dark};
  }

  :hover {
    box-shadow: 0 10px 20px -15px red;
  }
`

export default Button

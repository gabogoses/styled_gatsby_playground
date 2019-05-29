import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Arial Narrow Bold', sans-serif;
    color: white
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const StyleWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark};
  position: relative;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      {" "}
      <GlobalStyle />
      <StyleWrapper>{children}</StyleWrapper>
    </>
  </ThemeProvider>
)

export default Layout

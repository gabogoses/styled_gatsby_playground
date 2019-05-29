import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/Layout"
import H1 from "../components/H1/H1"
import Button from "../components/Button/Button"

const IndexPage = () => (
  <Layout>
    <H1 isBig>
      Hello
      <span role="img" aria-label="singer">
        👨‍🎤
      </span>
    </H1>
    <Button width="250px" className="" as={Link} to="/about">
      About Page
    </Button>
  </Layout>
)

export default IndexPage

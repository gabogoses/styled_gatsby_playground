import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/Layout"
import H1 from "../components/H1/H1"
import Button from "../components/Button/Button"
import SPAN from "../components/Span/Span"

const IndexPage = () => (
  <Layout>
    <H1 isBig>
      Hello Gabo !
      <br />
      <SPAN>
        <span role="img" aria-label="singer">
          {" "}
          👨‍🚀
        </span>
      </SPAN>
    </H1>
    <Button width="250px" className="" as={Link} to="/about">
      About Page
    </Button>
  </Layout>
)

export default IndexPage

import React from "react"
import Layout from "../layout/Layout"
import Button from "../components/Button/Button"
import { Link } from "gatsby"

const AboutPage = () => (
  <Layout>
    <h1>Hello Gabo, this is About page !</h1>
    <Button as={Link} to="/">
      Go Back
    </Button>
  </Layout>
)

export default AboutPage

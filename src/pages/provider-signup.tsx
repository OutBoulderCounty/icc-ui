import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"


import Seo from "../components/seo"
import Footer from "../components/footer"
import "../styles/global.css"
import Header from "../components/header"

const IndexPage = () => (
  <>
    <Seo title="Provider Sign Up" />
    <div className="min-h-screen bg-white">
    <Header />

      <main>
        <div className="container mx-auto px-4 pt-16">Provider SignUp</div>
      </main>
      <Footer />
    </div>
  </>
)

export default IndexPage

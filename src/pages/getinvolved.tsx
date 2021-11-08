import * as React from "react"

import Seo from "../components/seo"
import Footer from "../components/footer"
import "../styles/global.css"
import Header from "../components/header"
import GetInvolvedPage from "../components/getinvolvedpage"

const GetInvolved = () => (
  <>
    <Seo title="Get Involved" />
    <div className="min-h-screen bg-white">
    <Header />
      <main>
        <GetInvolvedPage />
      </main>
      <Footer />
    </div>
  </>
)

export default GetInvolved
import * as React from "react"

import Seo from "../components/seo"
import Footer from "../components/footer"
import "../styles/global.css"
import Header from "../components/header"
import GlossaryPage from "../components/glossarypage"

const Glossary = () => (
  <>
    <Seo title="Glossary" />
    <div className="min-h-screen bg-white">
    <Header />
      <main>
        <GlossaryPage />
      </main>
      <Footer />
    </div>
  </>
)

export default Glossary
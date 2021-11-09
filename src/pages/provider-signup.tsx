import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Footer from "../components/footer"
import "../styles/global.css"
import Header from "../components/header"

import ProviderBenefits from "../components/provider-signup/provider-benefits"
import ProviderCTA from "../components/provider-signup/provider-cta"
import ProviderHowItWorks from "../components/provider-signup/provider-how"

const IndexPage = () => (
  <>
    <Seo title="Provider Sign Up" />
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <div className="relative max-w-7xl mx-auto bg-indigo-100 sm:min-h-200 min-h-300">
          <div className="absolute inset-0">
            <StaticImage
              src="../images/garden_party-bw.jpeg"
              alt="garden party"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-violet-light mix-blend-multiply"
              aria-hidden="true"
            ></div>
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="absolute inset-8">
              <h1 className="text-white text-4xl lg:text-7xl">
                Provider Sign Up
              </h1>
              <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                Join a growing community of inclusive providers. Discover why
                you should consider creating an account and find information on
                filling out our Provider Questionnaire.
              </p>
            </div>
          </div>
        </div>

        <ProviderBenefits />

        <ProviderCTA />

        <ProviderHowItWorks />
      </main>
      <Footer />
    </div>
  </>
)

export default IndexPage

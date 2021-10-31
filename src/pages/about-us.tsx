import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import AboutStory from "../components/about-page/about-story"
import AboutTeam from "../components/about-page/about-team"
import AboutThanks from "../components/about-page/about-thanks"

import "../styles/global.css"

const AboutUs = () => (
  <>
    <Seo title="Home" />
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
              <h1 className="text-white text-4xl lg:text-7xl">About Us</h1>
              <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                Connecting you to community informed, competent, and transparent
                care specifically for LGBTQ+ communities.
              </p>
            </div>
          </div>
        </div>

        <AboutStory />
        <AboutTeam />
        <AboutThanks />
      </main>
      <Footer />
    </div>
  </>
)

export default AboutUs

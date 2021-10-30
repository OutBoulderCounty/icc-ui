import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

import Seo from "../components/seo"
import Footer from "../components/footer"
import "../styles/global.css"
import Header from "../components/header"
import AboutStory from "../components/about-story"
import AboutTeam from "../components/about-team"
import AboutThanks from "../components/about-thanks"

const AboutUs = () => (
  <>
    <Seo title="Home" />
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <div className="relative bg-indigo-100">
          <div className="absolute inset-0">
            <StaticImage
              src="../images/pride_balloons.jpeg"
              alt="Pride balloons on a car"
              className="w-full h-full object-cover"
            />
            {/* Looks best on b&w image -- try to find one to make b&w */}
            <div
              className="absolute inset-0 bg-violet mix-blend-multiply"
              aria-hidden="true"
            ></div>
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              Connecting you to community informed, competent, and transparent
              care specifically for LGBTQ+ communities.
            </p>
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

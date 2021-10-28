import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

import Seo from "../components/seo"
import Button from "../components/button"
import Footer from "../components/footer"
import "../styles/global.css"
import About from "../components/about"
import Header from "../components/header"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div className="min-h-screen bg-white">
    <Header />

      <main>
        <div className="max-w-7xl mx-auto overflow-x-hidden">
          {/* Replace with your content */}
          <div className="m:px-0 relative">
            <StaticImage
              src="../images/header_image.jpghome"
              alt="Pride balloons on a car"
              className="w-screen"
            />
            <div className="absolute inset-8">
              <h1 className="text-white text-4xl lg:text-7xl">
                Find Affirming Care with Exceptional Providers
              </h1>
              <div className="flex pt-4">
                <Button color="transparent" className="mx-2">
                  Discover
                </Button>
                <Button color="white" className="mx-2">
                  Let's talk
                </Button>
              </div>
            </div>
          </div>
          {/* /End replace */}
        </div>
        <About />
      </main>
      <Footer />
    </div>
  </>
)

export default IndexPage

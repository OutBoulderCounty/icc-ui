import * as React from "react"

import { CheckIcon } from "@heroicons/react/outline"

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
        <ProviderBenefits />

        <ProviderCTA />
      </main>
      <Footer />
    </div>
  </>
)

export default IndexPage

const ProviderCTA = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-violet">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet hover:bg-violet-lightest"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-violet bg-white hover:bg-violet-lightest"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    name: "Showcase your inclusive care practice",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Reach new patients",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Strengthen your reputation",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Join the healthcare revolution",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
]

function ProviderBenefits() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            Benefits
          </p>
          {/* <p className="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p> */}
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map(feature => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                {/* <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd> */}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

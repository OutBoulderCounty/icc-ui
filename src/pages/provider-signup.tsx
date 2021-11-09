import * as React from "react"

import { CheckIcon } from "@heroicons/react/outline"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Footer from "../components/footer"
import "../styles/global.css"
import Header from "../components/header"
import Button from "../components/button"

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

const ProviderCTA = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">
            Ready to join a growing list of inclusive providers?
          </span>
          <span className="block text-violet">
            Begin your provider account here!
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button color="violet">Get Started</Button>
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
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Benefits</p>
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

function ProviderHowItWorks() {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            {/* <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Introducing
            </span> */}
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How it Works
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            Get started by creating an account. Then you can fill out the
            Provider Questionnaire, saving your progress as you go.
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            The questionnaire will take around 15-30 minutes to complete and
            includes questions about your:
          </p>
          <ul role="list">
            <li>experience working with LGBTQ individuals</li>
            <li>training</li>
            <li>health practices</li>
            <li>facilities and staff</li>
          </ul>
          <p>
            Community focus groups informed the creation of the Provider
            Questionnaire and prioritized the information most important to our
            LGBTQ communities.
          </p>
          <p>
            Once you have completed the Provider Questionnaire, it will be
            approved by a staff member and published for our community.
          </p>

          {/*
          <p>
            Get started by creating an account. Then you can fill out the
            Provider Questionnaire, saving your progress as you go. The
            questionnaire will take around 15-30 minutes to complete and
            includes questions about your experience working with LGBTQ
            individuals, training, health practices, and facilities and staff.
            Community focus groups informed the creation of the Provider
            Questionnaire and prioritized the information most important to our
            LGBTQ communities.
          </p>
          <p>
            Once you have completed the Provider Questionnaire, it will be
            approved by a staff member and published for our community.
          </p>
          */}
        </div>
      </div>
    </div>
  )
}

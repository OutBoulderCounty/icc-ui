import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function AboutStory() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-violet font-semibold tracking-wider uppercase">
              Story
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-semibold tracking-wider sm:text-4xl">
              Why ICC Started
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none pb-0">
                  <StaticImage
                    src="../../images/vaccine_clinic-narrow.jpeg"
                    alt=""
                    className="rounded-lg shadow-lg object-cover object-center"
                    // width={1184}
                    // height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                For years Out Boulder County has been working to address our
                community’s need for inclusive health care. As our capacity for
                support grows so does our desire to create the change we want to
                see within Colorado.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Our communities are struggling daily to find health care they
                feel safe in. The disparities in equitable care for LGBTQ+
                people is striking, creating perpetual issues in access and
                quality of care. With less access comes less opportunity for
                living a full life as our authentic selves.
              </p>
              <p>
                Several years ago we began our project with the completion of
                Trans Health Boulder County, a collection of providers that had
                been vetted and found competent to successfully care for our
                trans community.
              </p>
              <p>
                This foundational resource was our first step to Inclusive Care
                Colorado, as we grow this network to include all of our LGBTQ+
                identities.
              </p>
              <p>Through our:</p>
              <h3>Vetting Process</h3>
              <ul role="list">
                <li>
                  Health care providers complete a thorough questionnaire to
                  inform potential patients about their experience with LGBTQ
                  communities, relevant training, and inclusive practices.
                </li>
                <li>
                  Provider questionnaires are reviewed by staff and published to
                  the site.
                </li>
                <li>
                  Reviews from community members will be added soon to share
                  patient experiences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutStory

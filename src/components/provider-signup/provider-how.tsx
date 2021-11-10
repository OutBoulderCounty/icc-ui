import * as React from "react"

const ProviderHowItWorks= () => {
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

export default ProviderHowItWorks;

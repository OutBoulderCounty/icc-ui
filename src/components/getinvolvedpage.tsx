import * as React from "react"
import { Popover, Transition } from '@headlessui/react'
import { StaticImage } from "gatsby-plugin-image"

const contactDetails = [
  { name: 'Collaborate', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
  { name: 'Press', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
  { name: 'Join our team', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
  { name: 'Say hello', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
]

const faqs = [
  {
    id: 1,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

const GetInvolvedPage = () => {
  return (
    <div className="bg-white">
        <div className="relative max-w-7xl mx-auto bg-indigo-100 sm:min-h-200 min-h-300">
          <div className="absolute inset-0">
            <StaticImage
              src="../images/pride_balloons-bw.jpg"
              alt="garden party"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-violet-lightest mix-blend-multiply"
              aria-hidden="true"
            ></div>
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="absolute inset-8">
              <h1 className="text-white text-4xl lg:text-7xl">Get Involved</h1>
              <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                A community resource, built by your community
              </p>
            </div>
          </div>
        </div>
       {/* DONATE SECTION */}
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 text-center sm:px-6 lg:px-8 lg:py-12 xl:rounded">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl text-black">
            <h2 className="text-3xl font-semibold tracking-wider sm:text-4xl">
              Your Support is Appreciated
            </h2>
            <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-violet-dark sm:w-auto bg-violet"
          >
            Donate
          </a>  
            <p className="text-xl font-light"> 
            100% of your donations to Inclusive Care Colorado go to maintaining and improving this resource. In order to keep this resource functional we need your support! LGBTQ+ people face so many challenges when it comes to healthcare, together we’ll make finding the right practitioner the easiest part.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* TRAINING SECTION */}
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 text-center sm:px-6 lg:px-8 lg:py-12 xl:rounded">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl text-black">
            <h2 className="text-3xl font-semibold tracking-wider sm:text-4xl">
              Training
            </h2>
            <p className="text-xl font-light"> 
              Are you aware of certified training programs for providers to further their LGBTQ+ competence? Please reach out to <a href="mailto:icc@outboulder.org"
            className="text-violet font-medium underline hover:no-underline">icc@outboulder.org</a>
            </p>
          </div>
        </div>
      </div>
    </div>

        {/* VOLUNTEER SECTION */}
        <div className="bg-white">
          <div className="bg-violet max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24 xl:rounded">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl text-black">
                <h2 className="text-3xl font-semibold tracking-wider sm:text-4xl text-white">
                  Volunteer
                </h2>
                <p className="text-xl font-light text-white"> 
                Inclusive Care Colorado is a resource built by volunteers who recognize the severe disparities in care that the LGBTQ+ community faces. If you’d like to volunteer your services to support your community please contact <a href="mailto:icc@outboulder.org"
            className="text-violetfont-medium underline hover:no-underline">icc@outboulder.org</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      <main>


        {/* FAQ
        <div className="bg-warm-gray-50">
          <div className="max-w-md mx-auto py-10 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-warm-gray-900">Frequently asked questions</h2>
                <p className="mt-4 text-lg text-warm-gray-500">
                  Can’t find the answer you’re looking for? Reach out to our{' '}
                  <a href="#" className="font-medium text-cyan-700 hover:text-cyan-600">
                    customer support
                  </a>{' '}
                  team.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  {faqs.map((faq) => (
                    <div key={faq.id}>
                      <dt className="text-lg font-medium text-warm-gray-900">{faq.question}</dt>
                      <dd className="mt-2 text-base text-warm-gray-500">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div> */}

      </main>
    </div>
  )
}

export default GetInvolvedPage
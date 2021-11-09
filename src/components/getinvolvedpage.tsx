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
      <header className="relative bg-sky-800 sm:pb-8">
        <div className="relative max-w-7xl mx-auto bg-indigo-100 sm:min-h-200 min-h-300 pb-6">
          <div className="absolute inset-0">
            <StaticImage
              src="../images/pride_balloons-bw.jpg"
              alt="pride balloons"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-violet-light mix-blend-multiply"
              aria-hidden="true"
            ></div>
          </div>

          <div className="relative pt-6 pb-6 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-1 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get Involved</h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              A community resource, built by your community
            </p>
          </div>   
        </div>
      </header>

       {/* DONATE SECTION */}
      <div>
        <div className="max-w-2xl mx-auto text-center pt-16 px-4 sm:pt-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="block">Your Support is Appreciated</span>
          </h2>
          <p className="mt-4 text-lg leading-6">
            100% of your donations to Inclusive Care Colorado go to maintaining and improving this resource. In order to keep this resource functional we need your support! LGBTQ+ people face so many challenges when it comes to healthcare, together we’ll make finding the right practitioner the easiest part.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-violet-dark sm:w-auto bg-violet"
          >
            Donate
          </a>
        </div>
      </div>   

        {/* TRAINING SECTION */}
        <div className="mx-auto py-16 px-4 sm:py-20 text-center sm:px-6 lg:px-8 max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">Training</h1>
          <p className="mt-12 text-xl text-center">
            Are you aware of certified training programs for providers to further their LGBTQ+ competence? Please reach out to <a className="text-violet-lightest font-medium underline hover:no-underline"  href='mailto:icc@outboulder.org'>icc@outboulder.org</a> to get it listed.
          </p>
        </div>        

        {/* VOLUNTEER SECTION */}
        <div className="mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-center lg:max-w-7xl bg-violet">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white text-center">Volunteer</h1>
          <div className="max-w-2xl mx-auto">
            <p className="mt-6 text-xl text-white text-center">
              Inclusive Care Colorado is a resource built by volunteers who recognize the severe disparities in care that the LGBTQ+ community faces. If you’d like to volunteer your services to support your community please contact <a className="text-white font-medium underline hover:no-underline" href='mailto:icc@outboulder.org'>icc@outboulder.org</a>
            </p>            
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
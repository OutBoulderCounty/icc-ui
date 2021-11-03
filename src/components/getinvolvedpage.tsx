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

const Getinvolvedpage = () => {
  return (
    <div className="bg-white">
      <header className="relative pb-24 bg-sky-800 sm:pb-32">
        <div className="absolute inset-0">
          <StaticImage
            className="w-full h-full object-cover"
            src="../images/pride_balloons.jpeg"
            alt=""
          />

          <div
            className="absolute inset-0 bg-gradient-to-l from-sky-800 to-cyan-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <Popover as="div" className="relative z-10">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 pb-2 px-4 sm:px-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex items-center justify-between w-full lg:w-auto">
              <a href="#">
                <span className="sr-only">Workflow</span>
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="bg-sky-800 bg-opacity-0 rounded-md p-2 inline-flex items-center justify-center text-cyan-100 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                </Popover.Button>
              </div>
            </div>
          </nav>

          <Transition
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
          </Transition>
        </Popover>

        <div className="relative bg-black bg-opacity-50 mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Volunteer</h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Inclusive Care Colorado is a resource built by volunteers who realize the severe disparities in care that the LGBTQ+ community faces. If you’d like to volunteer your services in another way you think would benefit your community please contact <a className="text-violet-lightest font-medium underline hover:no-underline" href='mailto:icc@outboulder.org'>icc@outboulder.org</a>
          </p>
          <p className="mt-12 text-xl text-white max-w-3xl">
            Are you aware of certified training programs for providers to further their LGBTQ+ competence? Please reach out to <a className="text-violet-lightest font-medium underline hover:no-underline"  href='mailto:icc@outboulder.org'>icc@outboulder.org</a> to get it listed.
          </p>
        </div>
      </header>

      <main>
        {/* Side-by-side grid 
        <div className="bg-white">
          <div className="max-w-md mx-auto py-12 px-4 sm:max-w-3xl sm:py-13 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="divide-y divide-warm-gray-200">
              <section className="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contact-heading">
                <h2 id="contact-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl">
                  Get in touch
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                  {contactDetails.map((item) => (
                    <div key={item.name}>
                      <h3 className="text-lg font-medium text-warm-gray-900">{item.name}</h3>
                      <dl className="mt-2 text-base text-warm-gray-500">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>{item.email}</dd>
                        </div>
                        <div className="mt-1">
                          <dt className="sr-only">Phone number</dt>
                          <dd>{item.telephone}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>*/}

       {/* DONATE SECITON */}
      <div className="bg-violet">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Please Donate</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-white">
            100% of your donations to Inclusive Care Colorado go to maintaining and improving this resource. In order to keep this resource functional we need your support! If you found this to be helpful in finding care we encourage you to support its ability to help your peers. LGBTQ+ people face so many challenges when it comes to healthcare, together we’ll make finding the right practitioner the easiest part.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-violet bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Donate
          </a>
        </div>
      </div>   


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

export default Getinvolvedpage
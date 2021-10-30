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

const AboutUs = () => (
  <>
    <Seo title="Home" />
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <div className="relative bg-indigo-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
              alt=""
            />
            <div
              className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
              aria-hidden="true"
            ></div>
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
              lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
              consectetur. Sit justo viverra non adipisicing elit distinctio.
            </p>
          </div>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Case Study
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Meet Whitney
                </h3>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:row-start-1 lg:col-start-2">
                <svg
                  className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                  width="404"
                  height="384"
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="384"
                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                  />
                </svg>
                <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <img
                        className="rounded-lg shadow-lg object-cover object-center"
                        src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                        alt="Whitney leaning against a railing on a downtown street"
                        width="1184"
                        height="1376"
                      />
                    </div>
                    <figcaption className="mt-3 flex text-sm text-gray-500">
                      {/* <!-- Heroicon name: solid/camera --> */}
                      <svg
                        className="flex-none w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="ml-2">Photograph by Marcus O’Leary</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                  <p className="text-lg text-gray-500">
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                    Dictum urna sed consectetur neque tristique pellentesque.
                    Blandit amet, sed aenean erat arcu morbi.
                  </p>
                </div>
                <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <p>
                    Sollicitudin tristique eros erat odio sed vitae, consequat
                    turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                    Eros eu viverra donec ut volutpat donec laoreet quam urna.
                  </p>
                  <p>
                    Bibendum eu nulla feugiat justo, elit adipiscing. Ut
                    tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh
                    leo. Dictum et et et sit. Faucibus sed non gravida lectus
                    dignissim imperdiet a.
                  </p>
                  <p>
                    Dictum magnis risus phasellus vitae quam morbi. Quis lorem
                    lorem arcu, metus, egestas netus cursus. In.
                  </p>
                  <ul role="list">
                    <li>Quis elit egestas venenatis mattis dignissim.</li>
                    <li>
                      Cras cras lobortis vitae vivamus ultricies facilisis
                      tempus.
                    </li>
                    <li>
                      Orci in sit morbi dignissim metus diam arcu pretium.
                    </li>
                  </ul>
                  <p>
                    Rhoncus nisl, libero egestas diam fermentum dui. At quis
                    tincidunt vel ultricies. Vulputate aliquet velit faucibus
                    semper. Pellentesque in venenatis vestibulum consectetur
                    nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.
                    Morbi enim fermentum lacus in. Viverra.
                  </p>
                  <h3>How we helped</h3>
                  <p>
                    Tincidunt integer commodo, cursus etiam aliquam neque, et.
                    Consectetur pretium in volutpat, diam. Montes, magna cursus
                    nulla feugiat dignissim id lobortis amet. Laoreet sem est
                    phasellus eu proin massa, lectus. Diam rutrum posuere donec
                    ultricies non morbi. Mi a platea auctor mi.
                  </p>
                  <p>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                    Dictum urna sed consectetur neque tristique pellentesque.
                    Blandit amet, sed aenean erat arcu morbi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  The People
                </h2>
                <p className="text-xl text-gray-500">
                  Risus velit condimentum vitae tincidunt tincidunt. Mauris
                  ridiculus fusce amet urna nunc. Ut nisl ornare diam in.
                </p>
              </div>
              <ul
                role="list"
                className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
              >
                <li>
                  <div className="space-y-4">
                    <img
                      className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                      src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt=""
                    />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <h3>Michael Foster</h3>
                        <p className="text-indigo-600">Co-Founder / CTO</p>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <!-- More people... --> */}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </>
)

export default AboutUs

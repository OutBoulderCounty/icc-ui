import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"

import "../styles/global.css"

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}
const navigation = [
  { name: "About Us", href: "#", current: false },
  { name: "Research", href: "#", current: false },
  { name: "Get Involved", href: "#", current: false },
]
const userNavigation = [
  // { name: "Your Profile", href: "#" },
  // { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div className="min-h-screen bg-white">
      <Disclosure as="nav" className="bg-white border-b border-gray-200">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <StaticImage
                      className="block lg:hidden w-auto"
                      height={65}
                      src="../images/color-vertical1x.png"
                      alt="Inclusive Care Colorado"
                    />
                    <StaticImage
                      className="hidden lg:block w-auto"
                      height={50}
                      src="../images/color-horizontal1x.png"
                      alt="Inclusive Care Colorado"
                    />
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "border-indigo-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                          "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <Button color="violet">Donate</Button>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1 border-t">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                      "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <main>
        <div className="max-w-7xl mx-auto ">
          {/* Replace with your content */}
          <div className="m:px-0 relative ">
            <StaticImage
              src="../images/vaccine_clinic.jpeg"
              alt="A person with their fist raised, holding a pride flag, and standing in front of two signs"
            />
            <div className="absolute inset-8">
              <h1 className="text-white text-9xl">
                Everyday care for everyday people.
              </h1>
              <p className="text-white pt-4">
                We're an organization dedicated to helping all communities
                across Colorado.
              </p>
              <div className="flex pt-4">
                <Button color="transparent">Discover</Button>
                <Button color="white">Let's talk</Button>
              </div>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  </>
)

export default IndexPage

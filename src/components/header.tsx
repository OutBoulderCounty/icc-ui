import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Disclosure} from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Button from "../components/button"
import {Link} from 'gatsby'

const navigation = [
  { name: "About Us", href: "/about-us", current: false },
  { name: "Research", href: "#", current: false },
  { name: "Get Involved", href: "/getinvolved", current: false },
  { name: "Glossary", href: "/glossary", current: false },
  { name: "Provider Sign Up", href: "/provider-signup", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = () => {
  return (
      <Disclosure as="nav" className="bg-white border-b border-gray-200">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
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
                    </Link>

                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map(item => (
                      <Link 
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "border-indigo-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                          "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <a
                  href="https://outboulder.app.neoncrm.com/forms/5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="my-2" color="violet">
                    Donate
                  </Button>
                </a>
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
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                      "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>    
  )
}

export default Header
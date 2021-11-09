import * as React from "react"
import { CheckIcon } from "@heroicons/react/outline"

const features = [
  {
    name: "Showcase your inclusive care practice",
    description:
      "Lorem magna do enim anim do id irure ullamco aliquip.",
  },
  {
    name: "Reach new patients",
    description:
      "Velit anim minim ipsum qui elit.",
  },
  {
    name: "Strengthen your reputation",
    description:
      "Sunt cillum exercitation irure aliqua in nulla officia eu elit.",
  },
  {
    name: "Join the healthcare revolution",
    description:
      "Adipisicing eiusmod sit ullamco consequat laboris velit minim excepteur et dolor nostrud consequat non pariatur.",
  },
]

const ProviderBenefits = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Benefits</p>
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


export default ProviderBenefits;

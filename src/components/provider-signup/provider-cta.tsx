import * as React from "react"
import Button from "../button";


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
            <Button color="violet">Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProviderCTA;

import * as React from "react"
import { AuthorizedContent, useAuthUser } from "@frontegg/react"
import { Link } from "gatsby"

// TODO: if user is a provider, then Get started button should go to provider dashboard

const UserLanding = () => {
  const user = useAuthUser()
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Welcome, {user.name}</span>
          <span className="block">Ready to dive in?</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <AuthorizedContent requiredRoles={["Admin"]}>
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/admin"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </Link>
            </div>
          </AuthorizedContent>
          <div className="ml-3 inline-flex">
            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLanding

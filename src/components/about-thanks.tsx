import React from "react"
const groups = [
  {
    name: "Out Boulder County",
    message:
      "Out Boulder County has supported this project as a part of their mission to support the LGBTQ+ communities of Colorado. Our work could only have been done with the dedication of their team and donors. Inclusive Care Colorado will continue to operate within Out Boulder County’s programs to provide resources for care providers across Colorado. ",
  },
  {
    name: "Volunteers",
    message:
      "A special thank you to our focus group volunteers donating their time to dive deep into their needs when accessing inclusive health care. Without our community this resource would be yet another made without appropriate representation. Inclusive Care Colorado is a community informed, community designed, and community focused resource.",
  },
  // More thank yous...
]

function AboutThanks() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Special Thanks To...
            </h2>
            {/* <p className="mt-4 text-lg text-gray-500">
              Can’t find the question you’re looking for? Reach out to our{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                customer support
              </a>{" "}
              team.
            </p> */}
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {groups.map(group => (
                <div key={group.name}>
                  <dd className="mt-2 text-base text-gray-500">{group.message}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutThanks

import React from "react"
import Image from "./dynamic-image"
import { graphql, useStaticQuery } from "gatsby"

const people = [
  {
    name: "Clark Winters (he/him)",
    role: "tech lead and developer",
    relativePath: "team-photos/test1.jpeg",
  },
  {
    name: "Josie Nixon (all pronouns)",
    role: "project lead",
    relativePath: "team-photos/test1.jpeg",
  },
  {
    name: "Michal Duffy (they/them)",
    role: "program manager",
    relativePath: "team-photos/test1.jpeg",
  },
  {
    name: "Amy Onwudinanti (she/her)",
    role: "full stack intern",
    relativePath: "team-photos/test1.jpeg",
  },
  {
    name: "Raye Watson (they/them)",
    role: "front end developer",
    relativePath: "team-photos/test2.jpeg",
  },
  {
    name: "Daniel Park (he/him)",
    role: "full stack developer",
    relativePath: "team-photos/test2.jpeg",
  },
  {
    name: "Martin Carpoi (he/him)",
    role: "UI/UX developer",
    relativePath: "team-photos/test2.jpeg",
  },
  {
    name: "Kenneth Donahue (he/him)",
    role: "front end developer",
    relativePath: "team-photos/kenneth-donahue.jpg",
  },
  {
    name: "Carmen Lyons (she/her)",
    role: "Americorp Volunteer",
    relativePath: "team-photos/test2.jpeg",
  },
  // More people...
]

function AboutTeam() {

  const query = useStaticQuery(graphql`
  query {
    allFile {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`)

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24 bg-violet xl:rounded">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl text-white">
            <h2 className="text-3xl font-semibold tracking-wider sm:text-4xl">
              The People
            </h2>
            <p className="text-xl font-light">
              This project would not have been possible without a dedicated team
              willing to take on the challenge. The countless hours volunteered
              are donated knowing that this revolutionary resource will save the
              lives of our community. Our hope is that this site will continue
              to grow and improve the lives of our LGBTQ+ peers, every person on
              this list showcased their desire for a more equitable future in
              healthcare through their commitment.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-5"
          >
            {people.map(person => (
              <li
                key={person.name}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <div className="space-y-4 p-3">
                  <Image person={person} data={query}/>
                  <div className="space-y-2">
                    <div className="text-xs font-normal lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-gray-900 font-semibold">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam

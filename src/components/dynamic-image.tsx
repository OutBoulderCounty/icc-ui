import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Image({ person }) {
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

  const imageNode = query.allFile.nodes.find(
    node => node.relativePath === person.relativePath
  )
  const image = getImage(imageNode.childImageSharp.gatsbyImageData)

  return (
    <GatsbyImage
      image={image}
      alt={person.name}
      className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
    />
  )
}

export default Image

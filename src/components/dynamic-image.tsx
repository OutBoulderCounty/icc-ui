import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Image({ person, data }) {
  const imageNode = data.allFile.nodes.find(
    node => node.relativePath === person.relativePath
  )
  const image = getImage(imageNode?.childImageSharp.gatsbyImageData)

  return (
    <GatsbyImage
      image={image}
      alt={person.name}
      className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
    />
  )
}

export default Image

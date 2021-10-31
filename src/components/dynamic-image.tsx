import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Image({ data }) {

  const image = getImage(data)
  return (
    <GatsbyImage
      image={image}
      alt={data.id}
      className="h-full w-full"
    />
  )
}

export default Image

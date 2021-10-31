import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Image({ imageFile }) {

  const image = getImage(imageFile)

  return (
    <GatsbyImage
      image={image}
      alt={imageFile.id}
      className="h-full w-full"
    />
  )
}

export default Image

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import * as React from "react"
import { FronteggProvider } from "@frontegg/react"

const contextOptions = {
  baseUrl: "https://icc.frontegg.com",
}

export const wrapRootElement = ({ element }) => {
  return (
    <FronteggProvider contextOptions={contextOptions}>
      {element}
    </FronteggProvider>
  )
}

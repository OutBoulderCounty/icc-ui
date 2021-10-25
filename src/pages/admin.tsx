import * as React from "react"
import { FronteggProvider } from "@frontegg/react"

import Loader from "../components/loader"
import Error from "../components/error"
import Dashboard from "../components/admin/dashboard"
import Seo from "../components/seo"

const contextOptions = {
  baseUrl: "https://icc.frontegg.com",
}

const Admin: React.FC = () => {
  return (
    <>
      <Seo title="Admin" />
      <FronteggProvider
        contextOptions={{
          baseUrl: "https://icc.frontegg.com",
          // urlPrefix: "/admin",
        }}
      >
        <Dashboard />
      </FronteggProvider>
    </>
  )
}

export default Admin

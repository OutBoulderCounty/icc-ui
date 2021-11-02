import * as React from "react"
import { FronteggProvider } from "@frontegg/react"

import Loader from "../components/loader"
import Error from "../components/error"
import Dashboard from "../components/admin/dashboard"
import Seo from "../components/seo"

const Admin: React.FC = () => {
  return (
    <>
      <Seo title="Admin" />
      <FronteggProvider
        contextOptions={{
          baseUrl: "https://icc.frontegg.com",
        }}
        authOptions={{
          routes: {
            loginUrl: "/admin/account/login",
            logoutUrl: "/admin/account/logout",
            socialLoginCallbackUrl: "/admin/account/social/success",
            authenticatedUrl: "/admin",
          },
        }}
      >
        <Dashboard />
      </FronteggProvider>
    </>
  )
}

export default Admin

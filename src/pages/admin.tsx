import * as React from "react"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

import Loader from "../components/loader"
import Error from "../components/error"
import Dashboard from "../components/admin/dashboard"
import Seo from "../components/seo"

const Dash = withAuthenticationRequired(Dashboard, {
  returnTo: `${window.location.origin}/admin`,
})

const Admin: React.FC = () => {
  const { isLoading, error } = useAuth0()

  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return <Error message={error.message || "We failed"} />
  }
  return (
    <>
      <Seo title="Admin" />
      <Dash />
    </>
  )
}

export default Admin

import * as React from "react"

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 my-2 border-t-4 border-b-4 border-violet" />
    </div>
  )
}

export default Loader

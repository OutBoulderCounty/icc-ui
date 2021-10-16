import * as React from "react"

type Props = {
  children?: React.ReactNode
  color: "violet" | "white" | "transparent"
}

const Button: React.FC<Props> = ({ children, color }: Props) => {
  const colorClasses: string =
    color === "white"
      ? "text-black bg-white hover:bg-black hover:text-white"
      : color === "transparent"
      ? "bg-transparent text-white border-white"
      : "text-white bg-violet hover:bg-violet-dark"
  return (
    <div className="sm:ml-6 sm:flex sm:items-center place-self-center">
      <button
        type="button"
        className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 w-36 focus:ring-violet ${colorClasses}`}
      >
        {children}
      </button>
    </div>
  )
}

export default Button

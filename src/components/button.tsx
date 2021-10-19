import * as React from "react"

type Props = {
  children?: React.ReactNode
  color: "violet" | "white" | "transparent"
  onClick?: () => void
  className?: string
  btnClassName?: string
}

const Button: React.FC<Props> = ({
  children,
  color,
  onClick,
  className,
  btnClassName,
}: Props) => {
  const colorClasses: string =
    color === "white"
      ? "text-gray-700 bg-white hover:bg-violet hover:text-white hover:border-white"
      : color === "transparent"
      ? "bg-transparent text-white border-white hover:bg-violet"
      : "text-white bg-violet hover:bg-violet-dark"
  return (
    <div className={`sm:flex sm:items-center place-self-center ${className}`}>
      <button
        type="button"
        className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 w-36 focus:ring-violet ${colorClasses} ${btnClassName}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default Button

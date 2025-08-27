export default function Button({ children, variant = "primary", ...props }) {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors"
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  }
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  )
}
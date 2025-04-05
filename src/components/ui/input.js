export function Input({ type = "text", placeholder, className = "", ...props }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`border rounded-lg px-3 py-2 w-full ${className}`}
        {...props}
      />
    );
  }
  
export function Card({ children }) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return <div className="p-4">{children}</div>;
  }
  
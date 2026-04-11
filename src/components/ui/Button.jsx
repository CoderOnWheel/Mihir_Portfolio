const Button = ({ children }) => {
  return (
    <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
      {children}
    </button>
  );
};

export default Button;
const Button = ({ text, onClick }) => {
    return (
      <button
        className="py-2 px-6 bg-[#00486d] text-white rounded-md hover:bg-blue-700 transition text-lg"
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  
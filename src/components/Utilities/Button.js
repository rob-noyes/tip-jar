//Button for each tip level
//value for the value percentage & text value on button interface
//Click event for clicking the button to produce a tip total
const Button = ({ value, onClick }) => {
  return (
    <button
      className="rounded-md bg-red-400 w-36 h-12 text-xl"
      type="button"
      value={value}
      onClick={onClick}
    >
      {value}%
    </button>
  );
};

export default Button;

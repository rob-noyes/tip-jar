//Button for each tip level
//value for the value percentage & text value on button interface
//Click event for clicking the button to produce a tip total
const Button = ({ value, onClick }) => {
  return (
    <button
      className="rounded-md bg-darkgreen text-white w-36 h-10 text-xl focus:bg-lightteal focus:text-green-900 lg:w-28"
      type="button"
      value={value}
      onClick={onClick}
    >
      {value}%
    </button>
  );
};

export default Button;

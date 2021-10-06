//Button for each tip level
//value for the value percentage & text value on button interface
//Click event for clicking the button to produce a tip total
const Button = ({ value, onClick }) => {
  return (
    <button
      className="rounded-sm bg-red-400 w-44"
      type="button"
      value={value}
      onClick={onClick}
    >
      {value}%
    </button>
  );
};

export default Button;

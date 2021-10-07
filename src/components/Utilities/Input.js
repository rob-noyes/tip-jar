const Input = ({ value, onChange }) => {
  return (
    <input
      className=" bg-gray-100 rounded-md text-2xl h-12 text-right px-4"
      onChange={(e) => onChange(e)}
      type="number"
      placeholder="0"
      value={value}
    />
  );
};

export default Input;

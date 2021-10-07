const Input = ({ value, onChange, event }) => {
  return (
    <input
      className=" bg-gray-100 rounded-md text-2xl h-12 text-right px-4 lg:w-96 "
      onChange={(e) => onChange(e)}
      type="text"
      placeholder="0"
      value={value}
    />
  );
};

export default Input;

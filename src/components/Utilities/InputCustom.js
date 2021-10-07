const InputCustom = ({ value, onChange }) => {
  return (
    <input
      className="rounded-md bg-gray-100 w-36 h-12 text-right text-xl placeholder-gray-500 p-2 lg:w-28 lg:h-10"
      onChange={(e) => onChange(e)}
      type="text"
      placeholder="Custom"
      value={value}
    />
  );
};

export default InputCustom;

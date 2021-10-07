const InputCustom = ({ value, onChange }) => {
  return (
    <input
      className="rounded-md bg-gray-100 w-36 h-12 text-right text-xl placeholder-gray-500 p-2"
      onChange={(e) => onChange(e)}
      type="number"
      placeholder="Custom"
      value={value}
    />
  );
};

export default InputCustom;

const InputCustom = ({ value, onChange }) => {
  return (
    <input
      className="rounded-sm bg-red-400 w-44"
      onChange={(e) => onChange(e)}
      type="number"
      placeholder="0"
      value={value}
    />
  );
};

export default InputCustom;

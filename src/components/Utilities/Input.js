const Input = ({ value, onChange }) => {
  return (
    <input
      onChange={(e) => onChange(e)}
      type="number"
      placeholder="0"
      value={value}
    />
  );
};

export default Input;

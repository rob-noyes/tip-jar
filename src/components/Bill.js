import Input from './Utilities/Input';

const Bill = ({ value, onChange }) => {
  return (
    <div className="flex flex-col justify-center">
      <h4>Bill</h4>
      <Input onChange={onChange} value={value} />
    </div>
  );
};

export default Bill;

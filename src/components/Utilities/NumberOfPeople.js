import Input from './Input';

const NumberOfPeople = ({ value, onChange }) => {
  return (
    <div className="flex flex-col justify-center">
      <h4>Number Of People</h4>
      <Input value={value} onChange={onChange} />
    </div>
  );
};
export default NumberOfPeople;

import Button from './Utilities/Button';
import InputCustom from './Utilities/InputCustom';

const SelectTip = ({ onClick, onChange, customValue }) => {
  return (
    <div className="my-8">
      <h4 className="my-4">Select Tip %</h4>
      <div className="grid grid-cols-2 gap-y-5 gap-x-5 justify-items-center lg:grid-cols-3 lg:gap-x-0 lg:gap-y-4">
        <Button value={10} onClick={onClick} />
        <Button value={15} onClick={onClick} />
        <Button value={20} onClick={onClick} />
        <Button value={25} onClick={onClick} />
        <Button value={30} onClick={onClick} />
        <InputCustom value={customValue} onChange={onChange} />
      </div>
    </div>
  );
};

export default SelectTip;

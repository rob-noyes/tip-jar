import Button from './Utilities/Button';
import InputCustom from './Utilities/InputCustom';

const SelectTip = ({ onClick, onChange }) => {
  return (
    <div className="my-8">
      <h4 className="my-4">Select Tip %</h4>
      <div className="grid grid-cols-2 gap-y-5 gap-x-5 justify-items-center lg:flex lg:flex-wrap lg:justify-center lg:flex-1 lg:self-center lg:w-96">
        <Button value={5} onClick={onClick} />
        <Button value={10} onClick={onClick} />
        <Button value={15} onClick={onClick} />
        <Button value={20} onClick={onClick} />
        <Button value={25} onClick={onClick} />
        <InputCustom onChange={onChange} />
      </div>
    </div>
  );
};

export default SelectTip;

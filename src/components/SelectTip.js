import Button from './Utilities/Button';
import Input from './Utilities/Input';
import InputCustom from './Utilities/InputCustom';

const SelectTip = ({ onClick, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <Button value={5} onClick={onClick} />
      <Button value={10} onClick={onClick} />
      <Button value={15} onClick={onClick} />
      <Button value={20} onClick={onClick} />
      <Button value={25} onClick={onClick} />
      <InputCustom onChange={onChange} />
    </div>
  );
};

export default SelectTip;

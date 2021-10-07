import Bill from './Bill';
import SelectTip from './SelectTip';
import TipAmount from './TipAmount';
import NumberOfPeople from './Utilities/NumberOfPeople';

const { useState } = require('react');

const TipContent = () => {
  const [total, setTotal] = useState('');
  const [custom, setCustom] = useState('');
  const [people, setPeople] = useState(0);
  const [tipValue, setTipValue] = useState(0);

  const handleTotal = (event) => {
    setTotal(event.target.value);
  };

  const handleButton = (event) => {
    setCustom(0);
    setTipValue(event.target.value);
  };

  const handleCustom = (event) => {
    setCustom(event.target.value);
  };

  const handlePeople = (event) => {
    setPeople(event.target.value);
  };

  const handleReset = () => {
    setTotal('');
    setTipValue('');
    setCustom('');
    setPeople('');
  };

  const decideTip = (custom, tipValue) => {
    if (custom != 0) {
      return custom;
    } else {
      return tipValue;
    }
  };

  return (
    <div className="bg-white py-12 rounded-2xl w-screen lg: max-w-5xl lg:flex lg:flex-row lg:flex-wrap">
      <div className="px-8">
        {' '}
        <div>
          <Bill onChange={handleTotal} value={total} />
          <SelectTip
            onChange={handleCustom}
            onClick={handleButton}
            customValue={custom}
          />
          <NumberOfPeople onChange={handlePeople} value={people} />
        </div>
        <TipAmount
          total={total}
          tip={decideTip(custom, tipValue)}
          people={people}
          reset={handleReset}
        />
      </div>
    </div>
  );
};

export default TipContent;

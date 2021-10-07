import Bill from './Bill';
import SelectTip from './SelectTip';
import NumberOfPeople from './Utilities/NumberOfPeople';

const { useState } = require('react');

const TipContent = () => {
  const [total, setTotal] = useState('');
  const [custom, setCustom] = useState('');
  const [people, setPeople] = useState('');

  const handleTip = (event) => {
    setTotal(event.target.value);
  };

  const handleCustom = (event) => {
    setCustom(event.target.value);
  };

  const handlePeople = (event) => {
    setPeople(event.target.value);
  };
  return (
    <div className="bg-white py-12 rounded-2xl lg:px-44 lg:py-32 w-screen">
      <div className="px-8">
        {' '}
        <Bill onChange={handleTip} value={total} />
        <SelectTip onChange={handleCustom} value={custom} />
        <NumberOfPeople onChange={handlePeople} value={people} />
      </div>
    </div>
  );
};

export default TipContent;

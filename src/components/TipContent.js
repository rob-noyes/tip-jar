import Bill from './Bill';
import SelectTip from './SelectTip';

const { useState } = require('react');

const TipContent = () => {
  const [total, setTotal] = useState('');
  const [custom, setCustom] = useState('');

  const handleTip = (event) => {
    setTotal(event.target.value);
  };

  const handleCustom = (event) => {
    setCustom(event.target.value);
  };

  return (
    <div>
      <Bill onChange={handleTip} value={total} />
      {total}
      <SelectTip onChange={handleCustom} />
    </div>
  );
};

export default TipContent;

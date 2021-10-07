import Reset from './Utilities/Reset';

const validatePeople = (people, total, tip) => {
  if (people < 1) {
    return '0.00';
  } else {
    return ((total * (tip / 100)) / people).toFixed(2);
  }
};

const TipAmount = ({ total, tip, people, reset }) => {
  return (
    <div className="py-4 px-6 mt-6 bg-darkgreen rounded-2xl  text-white">
      <div className="flex flex-row justify-between items-center py-4">
        <p className="flex flex-col text-lg">
          Tip Amount{' '}
          <span className="text-sm text-white text-opacity-40">/ person</span>
        </p>
        <h2 className="text-4xl">${validatePeople(people, total, tip)}</h2>
      </div>
      <div className="flex flex-row justify-between items-center text-md">
        <p className="text-lg">Total</p>
        <h2 className="text-4xl">${(total * (tip / 100)).toFixed(2)}</h2>
      </div>
      <Reset reset={reset} />
    </div>
  );
};

export default TipAmount;

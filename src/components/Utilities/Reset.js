const Reset = ({ reset }) => {
  return (
    <button
      className="w-full bg-lightteal py-2 rounded-md text-xl text-green-900 font-bold my-4"
      onClick={reset}
    >
      RESET
    </button>
  );
};

export default Reset;

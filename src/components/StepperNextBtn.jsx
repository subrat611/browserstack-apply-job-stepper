const StepperNextBtn = (props) => {
  // eslint-disable-next-line react/prop-types
  const { handleNext, isNextBtnClicked, text } = props;
  return (
    <button
      className={`bg-blue-600 px-8 py-2 font-medium border-b-4 border-gray-700 border-l-4 text-lg text-gray-200 rounded-md mr-6 hover:bg-blue-700 ${
        isNextBtnClicked ? "focus:scale-95" : "scale-100"
      }`}
      onClick={handleNext}
    >
      {text}
    </button>
  );
};

export default StepperNextBtn;

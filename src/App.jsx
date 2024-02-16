import { useState } from "react";

function App() {
  const [isNextBtnClicked, setIsNextBtnClicked] = useState(false);
  const handleNext = () => {
    setIsNextBtnClicked((prev) => !prev);

    setTimeout(() => {
      setIsNextBtnClicked((prev) => !prev);
    }, 100);
  };

  return (
    <div className="w-full min-h-screen h-full">
      <div className="relative w-full max-w-[1280px] min-h-screen h-full border mx-auto shadow-sm">
        <div className="pt-10 px-10">
          <h3 className="text-lg font-medium tracking-wide">
            Fullstack Developer
          </h3>
          {/* stepper */}
          {/* body */}
        </div>
        <div className="fixed w-full max-w-[1280px] bg-white bottom-0 border border-t-gray-200 h-[80px] flex items-center justify-end z-10">
          <button
            className={`bg-blue-600 px-8 py-2 font-medium border-b-4 border-gray-700 border-l-4 text-lg text-gray-200 rounded-md mr-6 hover:bg-blue-700 ${
              isNextBtnClicked ? "focus:scale-95" : "scale-100"
            }`}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

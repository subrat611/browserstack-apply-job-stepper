/* eslint-disable react/prop-types */
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Stepper = forwardRef((props, ref) => {
  const {
    stepperConfig = [],
    currentStep,
    isComplete,
    calculateProgress,
    stepPos,
  } = props;

  return (
    <div className="relative w-full flex items-center justify-around">
      {stepperConfig.map((step, i) => (
        <div
          key={i}
          ref={(ele) => (ref.current[i + 1] = ele)}
          className="flex flex-col items-center z-10"
        >
          <div
            className={`rounded-full w-5 h-5 flex items-center justify-center ${
              currentStep === i + 1 ? "bg-blue-500" : "bg-gray-400"
            } ${(currentStep > i + 1 || isComplete) && "bg-green-500"}`}
          >
            {currentStep > i + 1 || isComplete ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m2.75 8.75l3.5 3.5l7-7.5"
                />
              </svg>
            ) : (
              <div className="w-2 h-2 rounded-full bg-white"></div>
            )}
          </div>
          <p className="text-gray-700 font-medium text-sm hidden md:inline-block">
            {step.name}
          </p>
        </div>
      ))}
      <div
        className="absolute top-[50%] -translate-y-[50%] md:top-[25%] md:-translate-y-[25%] h-1 bg-gray-400"
        style={{
          width: `calc(100% - ${stepPos.startItemPos + stepPos.endItemPos}px)`,
          marginLeft: stepPos.startItemPos - stepperConfig.length,
        }}
      >
        <div
          className="h-full bg-green-500 transition-all ease-in"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </div>
  );
});

export default Stepper;

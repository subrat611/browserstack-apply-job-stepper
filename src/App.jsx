import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Stepper from "./components/Stepper";
import { APPLICATION_STEPPER_CONFIG } from "./utils/stepperConfig";

import { nextStep } from "./store/slices/StepperSlice";
import StepperNextBtn from "./components/StepperNextBtn";

function App() {
  const [isNextBtnClicked, setIsNextBtnClicked] = useState(false);
  const [stepPos, setStepPos] = useState({
    startItemPos: 0,
    endItemPos: 0,
  });
  const { currentStep, isComplete } = useSelector(
    (state) => state.stepperStore
  );

  /**
   * index = ele
   * 1 -> <div key={0}></div>
   * 2 -> <div key={1}></div>
   */
  const stepItemRef = useRef([]);

  const dispatch = useDispatch();

  function handleWindowResize() {
    setStepPos({
      startItemPos:
        stepItemRef.current[1].offsetLeft / APPLICATION_STEPPER_CONFIG.length +
        1,
      endItemPos:
        stepItemRef.current[APPLICATION_STEPPER_CONFIG.length].offsetLeft /
        APPLICATION_STEPPER_CONFIG.length,
    });
  }

  useEffect(() => {
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [stepItemRef]);

  const handleNext = () => {
    setIsNextBtnClicked((prev) => !prev);

    setTimeout(() => {
      setIsNextBtnClicked((prev) => !prev);
    }, 100);

    dispatch(nextStep({ step: currentStep + 1 }));
  };

  const calculateProgress = () => {
    return ((currentStep - 1) / (APPLICATION_STEPPER_CONFIG.length - 1)) * 100;
  };

  return (
    <div className="w-full min-h-screen h-full">
      <div className="relative w-full max-w-[1280px] min-h-screen h-full border mx-auto shadow-sm">
        <div className="pt-10 px-1 md:px-10">
          <h3 className="text-lg font-medium tracking-wide">
            Fullstack Developer
          </h3>
          <div className="my-10">
            <Stepper
              stepperConfig={APPLICATION_STEPPER_CONFIG}
              currentStep={currentStep}
              isComplete={isComplete}
              calculateProgress={calculateProgress}
              ref={stepItemRef}
              stepPos={stepPos}
            />
          </div>
          {APPLICATION_STEPPER_CONFIG[currentStep - 1].Component}
        </div>
        <div className="fixed w-full max-w-[1280px] bg-white bottom-0 border border-t-gray-200 h-[80px] flex items-center justify-end z-10">
          <StepperNextBtn
            handleNext={
              currentStep === APPLICATION_STEPPER_CONFIG.length
                ? () => {}
                : handleNext
            }
            isNextBtnClicked={isNextBtnClicked}
            text={
              currentStep === APPLICATION_STEPPER_CONFIG.length
                ? "Submit"
                : "Next"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;

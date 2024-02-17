import MyInformation from "../components/ApplicationSteps/MyInformation";
import MyExperience from "../components/ApplicationSteps/MyExperience";
import ApplicationQuestion from "../components/ApplicationSteps/ApplicationQuestion";
import Review from "../components/ApplicationSteps/Review";

export const APPLICATION_STEPPER_CONFIG = [
  {
    name: "My Information",
    Component: <MyInformation />,
  },
  {
    name: "My Experience",
    Component: <MyExperience />,
  },
  {
    name: "Application Questions",
    Component: <ApplicationQuestion />,
  },
  {
    name: "Review",
    Component: <Review />,
  },
];

import MyInformation from "./MyInformation";
import MyExperience from "./MyExperience";
import Review from "./Review";

export const APPLICATION_STEPPER_CONFIG = [
  {
    name: "My Information",
    Component: () => <MyInformation />,
  },
  {
    name: "My Experience",
    Component: () => <MyExperience />,
  },
  {
    name: "Review",
    Component: () => <Review />,
  },
];

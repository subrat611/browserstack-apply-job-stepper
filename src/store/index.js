import { configureStore } from "@reduxjs/toolkit";

import stepperReducer from "./slices/StepperSlice";

const store = configureStore({
  reducer: {
    stepperStore: stepperReducer,
  },
});

export default store;

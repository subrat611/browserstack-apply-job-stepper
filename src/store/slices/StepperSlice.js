import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  isComplete: false,
};

const stepper = createSlice({
  name: "stepperStore",
  initialState,
  reducers: {
    nextStep: (state, { payload }) => {
      state.currentStep = payload.step;
    },
    setIsComplete: (state, { payload }) => {
      state.isComplete = payload.isComplete;
    },
  },
});

export const { nextStep } = stepper.actions;
export default stepper.reducer;

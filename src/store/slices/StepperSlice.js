import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  isComplete: false,
};

const stepper = createSlice({
  name: "stepperStore",
  initialState,
  reducers: {},
});

export default stepper.reducer;

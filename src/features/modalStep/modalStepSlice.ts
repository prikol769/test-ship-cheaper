import {createSlice} from '@reduxjs/toolkit'

export interface ModalStepState {
    value: number;
}

const initialState: ModalStepState = {
    value: 0
};

export const modalStepSlice = createSlice({
    name: 'modalStep',
    initialState,
    reducers: {
        incrementStep: (state) => {
            state.value += 1
        },
        decrementStep: (state) => {
            state.value -= 1
        },
        modalStepZero: (state) => {
            state.value = 0
        }
    }
});

export const {incrementStep, decrementStep, modalStepZero} = modalStepSlice.actions;

export default modalStepSlice.reducer;

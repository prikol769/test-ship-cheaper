import {configureStore} from '@reduxjs/toolkit';
import modalStepReducer from '../features/modalStep/modalStepSlice';
import dataUsersReducer from '../features/dataUsers/dataUsersSlice';

export const store = configureStore({
    reducer: {
        modalStep: modalStepReducer,
        dataUsers: dataUsersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

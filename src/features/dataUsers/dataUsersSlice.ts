import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DataUser, DataUserBank, DataUserContact, DataUserInvoiceAddress} from '../../types/types';

export interface dataUsersState {
    dataUsers: DataUser[];
    dataNewUser: DataUser;
}

const initialState: dataUsersState = {
    dataUsers: [],
    dataNewUser: {
        id: '',
        company: '',
        name: '',
        additional: '',
        street: '',
        postalCode: '',
        country: '',
        IBAN: '',
        BIC: '',
        bankName: '',
        fax: '',
        email: '',
        birthday: new Date("2020-12-12"),
        homepage: '',
    }
};

export const dataUsersSlice = createSlice({
    name: 'dataUsers',
    initialState,
    reducers: {
        addDataInvoiceAddress: (state, action: PayloadAction<DataUserInvoiceAddress>) => {
            state.dataNewUser = {...state.dataNewUser, ...action.payload}
        },
        addDataBank: (state, action: PayloadAction<DataUserBank>) => {
            state.dataNewUser = {...state.dataNewUser, ...action.payload}
        },
        addDataContact: (state, action: PayloadAction<DataUserContact>) => {
            state.dataNewUser = {...state.dataNewUser, ...action.payload}
        },
        resetDataNewUser: (state) => {
            state.dataNewUser = {...initialState.dataNewUser}
        },
        addNewUserToUsers: (state) => {
            state.dataUsers = [...state.dataUsers, {...state.dataNewUser}]
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.dataUsers = state.dataUsers.filter((user: DataUser) => user.id !== action.payload);
        }
    }
});

export const {
    addDataInvoiceAddress,
    addDataBank,
    addDataContact,
    resetDataNewUser,
    addNewUserToUsers,
    deleteUser
} = dataUsersSlice.actions;

export default dataUsersSlice.reducer;

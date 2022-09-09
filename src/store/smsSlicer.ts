import { createSlice } from '@reduxjs/toolkit';


type TypeActionSMS = {
    payload: {
        digit: string;
        messageFromSMS: string;
    };
    type: string;
};

type SelectSMS = {
    sms: {
        digit: string;
        messageFromSMS: string;
    };

};





export const smsSlice = createSlice({
    name: 'sms',
    initialState: {
        digit: '',
        messageFromSMS: ''
    },
    reducers: {
        sms(state: { digit: {} }, action: TypeActionSMS) {
            return {
                ...state,
                digit: action.payload.digit,
                messageFromSMS: action.payload.messageFromSMS
            }
        },

    },
});


export const { sms } = smsSlice.actions;

export const selectSMS = (state: SelectSMS) => state.sms;

export default smsSlice.reducer;
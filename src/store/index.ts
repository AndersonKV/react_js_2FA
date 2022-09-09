import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlicer';
import smsReducer from './smsSlicer';

export default configureStore({
    reducer: {
        auth: userReducer,
        sms: smsReducer
    },
});
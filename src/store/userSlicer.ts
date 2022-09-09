import { createSlice } from '@reduxjs/toolkit';

interface User {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
    phone: string;
}

type SelectAuth = {
    auth: {
        user: User;
        isLogged: boolean;
        token: string;
    };
    logout: {
        user: User;
        isLogged: boolean;
        token: string;
    };

};

type TypeActionAuth = {
    payload: {
        user: User;
        token: string;
        isLogged: boolean;
    };
    type: string;
};


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        isLogged: false,
        token: '',
    },
    reducers: {
        auth(state: { user: {} }, action: TypeActionAuth) {
            return {
                ...state,
                isLogged: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        },
        logout(state: {}) {
            return { ...state, isLogged: false, user: {}, token: '' };
        },
    },
});



export const { logout, auth, } = userSlice.actions;


export const selectAuth = (state: SelectAuth) => state.auth;

export default userSlice.reducer;
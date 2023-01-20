import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IThemeState {
    colorMode: any,
    mode: any
}

const initialState: IThemeState = {
    colorMode: {},
    mode: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setModeAction: (state:IThemeState, action:PayloadAction<'light'|'dark'>) => {
            state.mode = action.payload
        },
        toggleModeAction: (state:IThemeState) => {
            state.mode = (state.mode === 'light' ? 'dark' : 'light');
        },
    },
})

export const { setModeAction, toggleModeAction } = themeSlice.actions;

export default themeSlice.reducer;

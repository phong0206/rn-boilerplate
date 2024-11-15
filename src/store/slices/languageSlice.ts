import { createSlice } from '@reduxjs/toolkit';
import { generatePersistConfig } from '@utils/helper';
import { persistReducer } from 'redux-persist';

interface ILanguageState {
    data: any;
}

const initialState: ILanguageState = {
    data: '',
};

const languageSlice = createSlice({
    name: 'languageKey',
    initialState,
    reducers: {
        updateLanguageKey: (state, { payload }) => {
            state.data = payload;
        },
    },
});

export const { updateLanguageKey } = languageSlice.actions;
const persistConfig = generatePersistConfig('languageKey', ['data']);

export default persistReducer<ILanguageState>(persistConfig, languageSlice.reducer);

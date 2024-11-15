import { Action, AnyAction, CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generatePersistConfig } from '@utils/helper';
import { persistReducer } from 'redux-persist';

interface ILoadingState {
  isLoading: boolean;
}
type Reducer<A extends Action<any> = AnyAction> = CaseReducer<ILoadingState, A>;

const initialState: ILoadingState = {
  isLoading: false,
};

const showLoading: Reducer = state => {
  state.isLoading = true
};

const hideLoading: Reducer = state => {
  state.isLoading = false
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading,
    hideLoading,
  },
});

const persistConfig = generatePersistConfig('loading', ['isLoading']);

export const loadingActions = loadingSlice.actions;

export default persistReducer<ILoadingState>(persistConfig, loadingSlice.reducer);


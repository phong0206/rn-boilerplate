import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../../reactotron.config';
import rootSaga from './sagas/rootSaga';

import userInfoReducer from './slices/userInfoSlice';
import loadingReducer from './slices/loadingSlice';
import languageReducer from './slices/languageSlice';

const rootReducer = combineReducers({
    userInfo: userInfoReducer,
    loading: loadingReducer,
    languageKey: languageReducer,
});
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            // .concat(logger)
            .prepend(sagaMiddleware) as any,
    devTools: __DEV__,
    enhancers: getDefaultEnhancers => getDefaultEnhancers().concat((Reactotron as any)?.createEnhancer() as any),
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export type AppState = ReturnType<typeof rootReducer>;

export { store, persistor };

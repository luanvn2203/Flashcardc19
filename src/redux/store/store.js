import { createStore, combineReducers, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import booksReducer from '../reducers/bookReducer';
import authReducer from '../reducers/authReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['accessToken'] //user sau nay
};

const rootReducer = combineReducers({
    booksReducer: persistReducer(persistConfig, booksReducer),
    authReducer: persistReducer(persistConfig, authReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

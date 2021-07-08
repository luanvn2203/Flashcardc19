import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import TestComponent from './src/components/test';
import { persistor, store } from './src/redux/store/store';
import SignInScreen from './src/screens/LoginScreen/index';
// import MainStackNavigator from './src/screens/MainStackNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <SignInScreen />
      </PersistGate>
    </Provider>

  );
}


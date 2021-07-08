import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import TestComponent from './src/components/test';
import { persistor, store } from './src/redux/store/store';

import SignInScreen from './src/screens/LoginScreen/index';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


// import MainStackNavigator from './src/screens/MainStackNavigator';

const StackScreen = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <NavigationContainer>
          <StackScreen.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
            <StackScreen.Screen name="SignIn" component={SignInScreen} />
            <StackScreen.Screen name="Home" component={HomeScreen} />
            <StackScreen.Screen name="Register" component={RegisterScreen} />
          </StackScreen.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


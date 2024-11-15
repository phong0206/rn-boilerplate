import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList } from './RootScenes';
import { AUTHENTICATE_ROUTE } from '../config/routes';
import navigationConfigs from '../config/options';
import RegisterScreen from '@features/authentication/RegisterScreen';
import LoginScreen from '@features/authentication/LoginScreen';
import ChangePassword from '@features/authentication/ChangePassword';

const MainStack = createStackNavigator<RootStackParamList>();

const AuthStack = () => (
    <MainStack.Navigator>
        <MainStack.Screen name={AUTHENTICATE_ROUTE.LOGIN} component={LoginScreen} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.REGISTER} component={RegisterScreen} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.CHANGE_PASS} component={ChangePassword} />
    </MainStack.Navigator>
);

export default AuthStack;

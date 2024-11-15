import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import isEqual from 'react-fast-compare';
import { Host } from 'react-native-portalize';
// import navigationConfigs from '../config/options';
import { APP_ROUTE } from '../config/routes';
import AuthStack from './AuthScenes';
import MainTabContainer from './TabScenes';
import { useAppSelector } from '@store/hooks';

export type RootStackParamList = Record<string, any>;

const MainStack = createStackNavigator<RootStackParamList>();

const AppStack = () => (
    // <Host>
        <MainStack.Navigator >
            <MainStack.Screen name={APP_ROUTE.MAIN_TAB} component={MainTabContainer} />
        </MainStack.Navigator>
    // </Host>
);

const Navigation: React.FunctionComponent = () => {
    const { token } = useAppSelector(state => state.userInfo, isEqual);

    if (token) {
        return <AppStack />;
    }
    return <AuthStack />;
};

export default Navigation;

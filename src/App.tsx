import 'react-native-gesture-handler';
import React from 'react';
import './utils/styles/global.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { loadLocaleLanguage } from './utils/i18next';
import { persistor, store } from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigation/NavigationService';
import Navigation from './navigation/scene/RootScenes';
import AuthStack from './navigation/scene/AuthScenes';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
    const onBeforeLift = () => {
        loadLocaleLanguage();
    };
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor} onBeforeLift={onBeforeLift}>
                    <NavigationContainer ref={navigationRef}>
                        <AuthStack />
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </GestureHandlerRootView>
    );
};

export default App;

declare module 'react-native-modals';
declare module 'react-native-onesignal';
declare module 'react-native-actionsheet';
declare module 'react-native-restart';
declare module 'react-native-progress';

declare global {
    import { RootStackParamList } from 'navigation/scene/RootScenes';
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

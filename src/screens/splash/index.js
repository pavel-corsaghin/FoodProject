import React, {useEffect} from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import DRAWABLES from '../../assets/drawables';

const SplashScreen = () => {
    return <ImageBackground style={{flex: 1}} source={DRAWABLES.splash} />;
};

export default SplashScreen

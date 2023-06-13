import React from "react";
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function CustomText(props) {
    let [fontsLoaded] = useFonts({
        'handFont': require("../../assets/fonts/Handlee-Regular.ttf")
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return(
        <Text onPress={props.press} style={[props.customStyle, {fontFamily: 'handFont'}]}> {props.text} </Text>
    )
}

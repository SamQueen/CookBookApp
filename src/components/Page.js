import React from "react";
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground, ScrollView } from 'react-native';
import Animated, { useAnimatedStyle } from "react-native-reanimated";

// custom imports
import Dividor from "../components/Dividor";
import CustomText from "../components/CustomText";

let screenHeight = Dimensions.get('window').height;

export default function Page(props) {
    const recipe = () => {
        navigation.navigate('Recipe');
    };

    // return nothing if visable is set to false
    if (!props.visable) {
        return <View></View>
    }

    return (

        <ScrollView className='Page' style={styles.page}>
            <Dividor thick={true}/>
            <View style={styles.header}>
                <CustomText customStyle={styles.headerText} text={props.title} />
                <CustomText press={props.addRecipePress} customStyle={styles.controls} text='Add Recipe' />
            </View>
            <Dividor thick={true}/>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
    page: {
        flex: 1,
        backgroundColor: '#fafafa',
        width: '50%',
        minHeight: screenHeight*0.95,
        maxHeight: screenHeight*0.95,
        alignSelf: 'center',
        paddingHorizontal: '4%',
        paddingVertical: '2%',

        // shadow 
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 2,

    },
    header: {
        flex: 1,
        flexDirection: 'row',
        height: screenHeight*0.06,
        maxHeight: screenHeight*0.06,
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontSize: '2em',
        marginVertical: 'auto',
    },
    controls: {
        marginVertical: 'auto',
    },
});
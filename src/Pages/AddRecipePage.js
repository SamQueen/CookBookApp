import React from "react";
import { StyleSheet, View, Dimensions, Image, ImageBackground, CheckBox, Text } from 'react-native';

// custom imports
import Dividor from "../components/Dividor";
import CustomText from "../components/CustomText";
import Input from '../components/Input.js'

let screenHeight = Dimensions.get('window').height;

export default function AddRecipePage(props) {

    // return nothing if show page is false
    if (!props.showPage) {
        return <View />
    }

    return (
        <View className='Page' style={styles.page}>

            <Dividor thick={true}/>
            <View style={styles.header}>
                <CustomText press={props.backEvent} customStyle={styles.controls} text='Back' />
                <CustomText customStyle={styles.headerText} text='Add Recipe' />
            </View>
            <Dividor thick={true}/>

            <View style={styles.getTitle}>
                <CustomText customStyle={styles.getTitleHeader} text='Enter a Name for your Recipe' />
                <Input/>
            </View>

            <View style={styles.getTitle}>
                <CustomText customStyle={styles.getTitleHeader} text='Select Difficulty' />

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        
                        <CustomText text='Easy' />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        
                        <CustomText text='Medium' />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        
                        <CustomText text='Hard' />
                    </View>
                </View>
            </View>

            <View style={styles.getTitle}>
                <CustomText customStyle={styles.getTitleHeader} text='Enter Prep and Cook time in hours' />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
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
        //shadowColor: '#171717',
        //shadowOffset: {width: 2, height: 5},
        //shadowOpacity: 0.3,
        //shadowRadius: 2,

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
        fontSize: 30,
        marginVertical: 'auto',
    },
    controls: {
        marginVertical: 'auto',
    },
    getTitle: {
        flex: 1,
        minHeight: screenHeight*0.1,
        maxHeight: screenHeight*0.1,
        marginTop: '5%',
    },
    getTitleHeader: {
        fontSize: 18,
    }
});
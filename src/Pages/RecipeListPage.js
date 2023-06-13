import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground, ScrollView } from 'react-native';

// custom imports
import Dividor from "../components/Dividor";
import CustomText from "../components/CustomText";

// set device type. mobile or web
let screenHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const deviceType = (windowWidth < 500) ? 'mobile' : 'web';

window._frameTimestamp = null;
const exampleData = [
    {'id': '1', 'catagory': 'Lunch', 'items':  ['Tortilla Queso Sandwich', 'Tacos','Tuna Salad', 'tacos', 'Sams Famous Lunch Stuff']},
    {'id': '2', 'catagory': 'Dinner', 'items': ['Steak Dinner', 'Sams Famoud Cornbread','Pasta Red Sauce']},
    {'id': '3', 'catagory': 'Snacks', 'items': ['Pizza Pepperoni Style', 'Skittles']},
    {'id': '4', 'catagory': 'Random', 'items': ['Brownie Dark Mode', 'Homemade Ice Crean','Legos (not for kids younger than 3)', 'One Human Soul (younger the better)']},
];

export default function RecipeListPage(props) {

    // return nothing if show page is false
    if (!props.showPage) {
        return <View />
    }

    return (
        <ScrollView className='Page' style={styles.page}>
            <Dividor thick={true}/>
            <View style={styles.header}>
                <CustomText press={props.addRecipeEvent} customStyle={styles.controls} text='Delete Recipe' />
                <CustomText customStyle={styles.headerText} text='My Recipes' />
                <CustomText press={props.addRecipeEvent} customStyle={styles.controls} text='Add Recipe' />
            </View>
            <Dividor thick={true}/>

            <View style={styles.recipeList}>

                {exampleData.map((header, index) => (

                    <View key={index}> 
                        <CustomText customStyle={styles.recipeListHeader} text={header.catagory} />

                        {header.items.map((item, index) => (
                            <CustomText key={index} press={props.selectRecipeEvent} customStyle={styles.recipeListItem} text={item} />
                        ))}
                    </View>

                ))}
                    
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fafafa',
        width: '50%',
        width: (deviceType === 'web') ? '50%' : '92%', 
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
        fontSize: 40,
        marginVertical: 'auto',
    },
    controls: {
        marginVertical: 'auto',
    },
    recipeList: {
        flex: 1,
        
    },
    recipeListHeader: {
        fontSize: 30,
        marginTop: '5%',
    }, 
    recipeListItem: {
        fontSize: 18,
        paddingLeft: '5%',
        marginTop: '1%',
    }
});
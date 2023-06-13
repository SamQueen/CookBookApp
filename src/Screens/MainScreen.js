import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground, ScrollView } from 'react-native';

// custom imports
import RecipePage from "../Pages/RecipePage";
import AddRecipePage from "../Pages/AddRecipePage";
import RecipeListPage from "../Pages/RecipeListPage";

export default function MainScreen({navigation}) {
    const [recipeListPage, setRecipeListPage] = useState(true);
    const [recipePage, setRecipePage] = useState(false);
    const [addRecipePage, setAddRecipePage] = useState(false);
    
    // add recipe event
    const addRecipe = () => {
        setRecipeListPage(false);
        setAddRecipePage(true);
    }

    // select recipe event
    const selectRecipe = () => {
        setRecipeListPage(false);
        setRecipePage(true);
    }

    // back event. goes from selected recipe to menu
    const backEvent = () => {
        setRecipePage(false);
        setRecipeListPage(true);
    }

    // back event 2 goes frome add recipe screeen to menus
    const backEvent2 = () => {
        setAddRecipePage(false);
        setRecipeListPage(true);
    }

    return (
        <View className='container' style={styles.container}>
            
            <ImageBackground style={styles.backgroundImage} resizeMode='cover' source={require('../../assets/images/kitchen-counter.jpg')} >

                <RecipeListPage selectRecipeEvent={selectRecipe} addRecipeEvent={addRecipe} showPage={recipeListPage} />
                <AddRecipePage backEvent={backEvent2} showPage={addRecipePage} /> 
                <RecipePage backEvent={backEvent} showPage={recipePage} />

            </ImageBackground>

        </View>
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
});
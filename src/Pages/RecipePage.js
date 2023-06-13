import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground } from 'react-native';
import DropShadow from 'react-native-drop-shadow';

// custom stuff
import Dividor from '../components/Dividor';
import IngrediantsList from '../components/IngredientsList';
import DirectionsList from '../components/DirectionsList';
import CustomText from '../components/CustomText';

let screenHeight = Dimensions.get('window').height;
let sampleIngredients = [
    "1/2 cup of self rising flour",
    "2 sticks of butter",
    "1/2 teaspoons of vanillia extract",
    "2 eggs",
    "1 human soul",
    "frosting",
    "sprinkles",
    "1/2 cup of self rising flour",
    "2 sticks of butter",
    "1/2 teaspoons of vanillia extract",
    "2 eggs",
    "1 human soul",
    "frosting",
    "sprinkles",
    "1/2 cup of self rising flour",
    "2 sticks of butter",
    "1/2 teaspoons of vanillia extract",
    "2 eggs",
    "1 human soul",
    "frosting",
    "sprinkles",
    "1/2 cup of self rising flour",
    "2 sticks of butter",
    "1/2 teaspoons of vanillia extract",
    "2 eggs",
    "1 human soul",
    "frosting",
    "sprinkles",
]

let sampleDirections = [
    "pre-heat oven to 350 degrees",
    "mix all ingrediants into a bowl",
    "beat the eggs seperatly ;)",
    "mix eggs with the rest of the ingrediants",
    "preheat pan in oven",
    "remove pan from oven when hot, lightly butter the pan so that the butter bubbles",
    "this is an extremly long sentence created for the purpse of testing the length limit of a direction string. if it is too long the end user may not be able to see the entire string and they will be dissapointed",
    "put mix in to pan and the pan into the oven",
    "remove after around 20 min and test with knife",
    "insert the collected human soul into the frosting mix",
    "top cupcakes with frosting and enjoy!"
]

export default function RecipePage(props) {

    function next() {
        
    }

    // return nothing if show page is false
    if (!props.showPage) {
        return <View />
    }

    return (
        <View className='Page' style={styles.page}>
            
            <Dividor thick={true}/>
            <View style={styles.header}>
                    <CustomText press={props.backEvent} customStyle={styles.controls} text='Back' />
                    <CustomText customStyle={styles.headerText} text='Vanilla Cupcakes' /> 
                    <CustomText press={next} customStyle={styles.controls} text='Next' />
            </View>
            <Dividor thick={true}/>
            
            <View className='stats' style={styles.stats}>
                <CustomText customStyle={styles.statsDifficulty} text='Difficulty: Hard' />
                <CustomText customStyle={styles.statsPrepTime} text='Prep Time: 1.5 hours' />
                <CustomText customStyle={styles.statsCookTime} text='Cook Time: 0.5 hours' />
            </View>
            
            <Dividor thick={true}/>

            <View style={{flexDirection:"row"}}>
                <View className='imageContainer' style={styles.imageContainer}>
                    <Image 
                        source={require('../../assets/images/vanilla-cupcake.jpg')}
                        style={styles.image}
                    />
                </View>

                <IngrediantsList ingredients={sampleIngredients}/>

            </View>

            <Dividor thick={true}/>

            <View>
                <DirectionsList ingredients={sampleDirections}/>
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
    stats: {
        maxHeight: screenHeight*0.05,
        height: screenHeight*0.05,
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    statsDifficulty: {
        width: '33%',
        marginVertical: 'auto',
        fontSize: 18,
    },
    statsPrepTime: {
        width: '33%',
        marginVertical: 'auto',
        fontSize: 18,
        textAlign: 'center',
    },
    statsCookTime: {
        width: '33%',
        marginVertical: 'auto',
        fontSize: 18,
        textAlign: 'right',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: screenHeight*0.5,
        height: screenHeight*0.5,
        maxWidth: '40%',
    },
    image: {
        height: '90%',
        width: '90%',
    },
});
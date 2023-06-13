import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

// custom imports
import CustomText from './CustomText';
import Dividor from './Dividor';

let screenHeight = Dimensions.get('window').height;

export default function IngrediantsList(props) {
    const [contentOffset, setContentOffset] = React.useState({ x: 0, y: 0 });
    const [contentSize, setContentSize] = React.useState(0);

    return (
        <View className='ingredients' style={styles.IngredientsContainer}>
            <CustomText customStyle={styles.ingredientHeader} text='Ingredients'/>

            <ScrollView 
                style={styles.indgredientList}
                scrollEventThrottle={16}

                onScroll={e => {
                    setContentOffset(e.nativeEvent.contentOffset);
                }}
                onContentSizeChange={(_, height) => {
                    setContentSize(height);
                }}
            >
                <Text style={{color: 'white'}} >  </Text>
                <Dividor thick={false}/>
                <Text style={{color: 'white'}} >  </Text>
                <Dividor thick={false}/>
                
                {props.ingredients.map((ingredient, index) => (
              
                    <View key={index}>
                        <CustomText customStyle={styles.ingredientItem} text={ingredient}/>
                        <Dividor thick={false}/>
                    </View>

                ))}

                <Text style={{color: 'white'}} >  </Text>
                <Dividor thick={false}/>
                <Text style={{color: 'white'}} > I am Secret Text. You Found Me </Text>
                <Dividor thick={false}/>

            </ScrollView>

        </View>
    )

}

const styles = StyleSheet.create({
    IngredientsContainer: {
        textAlign: 'center',
        paddingVertical: '5%',
        flex: 1,
        maxHeight: screenHeight*0.45,
        height: screenHeight*0.45,
        overflow: 'hidden',
    },
    ingredientHeader: {
        fontSize: 18,
    },
    indgredientList: {
        flex: 1,
        alignSelf: 'center',
        width: '80%',
        maxWidth: '80%',
        textAlign: 'left',
    },
    ingredientItem: {
        paddingLeft: 10,
        paddingTop: 3,
        letterSpacing: 1,
    },
});
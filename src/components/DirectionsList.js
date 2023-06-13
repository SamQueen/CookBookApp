import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

// custom text
import CustomText from './CustomText';
import Dividor from './Dividor';

let screenHeight = Dimensions.get('window').height;

export default function DirectionsList(props) {
    const [contentOffset, setContentOffset] = React.useState({ x: 0, y: 0 });
    const [contentSize, setContentSize] = React.useState(0);

    return (
        <View className='directions' style={styles.directionsContainer}>
            <CustomText customStyle={styles.directionsHeader} text='Directions'/>

            <ScrollView 
                style={styles.directionsList}
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
                
                {props.ingredients.map((direction, index) => (
              
                    <View key={index}>
                        <CustomText customStyle={styles.directionItem} text={direction}/>
                        <Dividor thick={false}/>
                    </View>

                ))}

                <Text style={{color: 'white'}} >  </Text>
                <Dividor thick={false}/>
                <Text style={{color: 'white'}} >  </Text>
                <Dividor thick={false}/>

            </ScrollView>

        </View>
    )

}

const styles = StyleSheet.create({
    directionsContainer: {
        textAlign: 'center',
        paddingVertical: '1%',
        flex: 1,
        maxHeight: screenHeight*0.27,
        height: screenHeight*0.27,
        overflow: 'hidden',
    },
    directionsHeader: {
        fontSize: 18,
        marginTop: '2%',
    },
    directionsList: {
        flex: 1,
        alignSelf: 'center',
        width: '80%',
        maxWidth: '80%',
        textAlign: 'left',
    },
    directionItem: {
        paddingLeft: 10,
        paddingTop: 3,
        letterSpacing: 1,
    },
});
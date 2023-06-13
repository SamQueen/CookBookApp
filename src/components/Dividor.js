import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Dividor(props) {
    if (!props.thick) {
        return(
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
        )
    }
    
    return(
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 2,
            }}
        />
    )
}
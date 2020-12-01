import React from 'react';
import { StyleSheet, View } from 'react-native';
import Squere from './Squere'

export default function Board({ totalGrid, handleSelect}) {

    return (
        <View style={styles.board}>
       {totalGrid.map((item,i) =><Squere key={`Squere${i}`} gamer={item} onPress={() => handleSelect(i)}/>)}
        </View>
    )
}
const styles = StyleSheet.create({
    board: {
        flex: 2,
        flexWrap: "wrap",
        marginBottom: 0,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 0,
        width: 300,
        height: 300,
        borderStyle: 'solid',
        borderColor: '#C97415'
    }
})

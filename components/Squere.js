import React from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function Squere({gamer, onPress}) {
    return (
        <TouchableOpacity style={styles.squere}
         onPress={onPress}>
           <Text style={gamer === 'X' ? styles.xSquere : styles.oSquere}> {gamer}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  squere:{
    width: 100,
    height: 100,
    borderWidth: 1,
    borderStyle:'solid',
    borderColor: '#C97415',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F8F9F9'
  },
  xSquere: {
    paddingRight: 10,
    fontSize: 50,
    color: '#C0392B'
  },
  oSquere: {
    paddingRight: 10,
    fontSize: 50,
    color: '#27AE60'
  }
})

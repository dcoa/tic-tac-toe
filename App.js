import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Board from './components/Board';
import calculateWinner from './helper.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xGamer, setxGamer] = useState(true);
  const xo = xGamer ? 'X': 'O';
  const winner = calculateWinner(history[stepNumber]);

  const handleSelect = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const grid = [...current];
    if(winner|| grid[i]) return;
    grid[i] = xo;
    setHistory([...historyPoint, grid])
    setStepNumber(historyPoint.length);
    setxGamer(!xGamer);
  }

  const handleRestart = () => {
    if(winner || stepNumber === 9 ) {
      setHistory([Array(9).fill(null)])
       setStepNumber(0);
       setxGamer(true)
     }
   }

  return (
    <>
      <View style={styles.totalContainer}>
      <View style={styles.header}>
        <Text style={styles.tittle}>Tic - Tac - Toe</Text>
        <Text style={styles.gamer}>{winner ? 'Winner: ' + winner :
          stepNumber === 9 ? 'The game is finished' :
         'Gamer :' && <>Gamer : <Text style={ xGamer ? styles.x : styles.o}>{xo}</Text></>
           }</Text>
        <StatusBar style="auto" />
      </View>
      <Board totalGrid={history[stepNumber]} handleSelect={handleSelect}/>
      <Pressable onPress={handleRestart} style={styles.restart}><Icon name={(winner || stepNumber === 9 ) ? 'restart' : 'restart-off'} size={50} color="#FFFF"/></Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  totalContainer: {
    flex: 1,
    backgroundColor: '#C97415'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle: {
    fontSize: 48,
    color: '#FDEBD0',
  },
  gamer: {
    fontSize:30,
    marginTop: 10,
    color: '#FFFF'
  },
  x:{
    color: '#F5B7B1',
  },
  o:{
    color: '#ABEBC6'
  },
  restart: {
    marginBottom: 30,
    alignSelf: 'center',
  }
});

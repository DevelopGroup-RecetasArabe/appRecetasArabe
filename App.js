import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewUser from './src/components/screens/NewUser'
export default function App() {
  return (
    <View style={styles.container}>
      <NewUser/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebecf2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

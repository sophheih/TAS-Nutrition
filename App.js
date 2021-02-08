import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TopBar from './src/components/TopBar';
import Add from './src/pages/Add';
export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View >
        <TopBar />
        <Add />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export const Header = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>Galery</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%',
    justifyContent: 'center',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
  }
});
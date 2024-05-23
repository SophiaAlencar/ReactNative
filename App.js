import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Title from './src/';


export default function App() {
  return (
    <View style={styles.container}>
      
      <Title/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbb4d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

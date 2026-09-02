import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExemploLoginScreen from './src/screen/ExemploLoginScreen';
import ExemploDashboardScreen from './src/screen/ExemploDashboardScreen';
import ExemploListScreen from './src/screen/ExemploListScreen';
import ExemploFormScreen from './src/screen/ExemploFormScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Projeto Final</Text>
      <StatusBar style="auto" />
      {/*<ExemploLoginScreen />*/}
      {/*<ExemploDashboardScreen />*/}
      {/*<ExemploListScreen />*/}
      {/*<ExemploFormScreen />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2D2D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

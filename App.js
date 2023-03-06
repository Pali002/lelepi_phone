import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Body/>
      <Footer/>
    </View>
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

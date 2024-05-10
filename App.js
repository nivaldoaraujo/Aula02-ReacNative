import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
// import { Button } from '@rneui/themed';
// import { Button as Btn } from '@rneui/themed';



export default function App() {
  return (
    <View style={styles.container}>
      <Header />

   
      <TextInput
      style={styles.input}
      placeholder='Digite o LOGIN'
      />

      <TextInput
      style={styles.input}
      placeholder='Digite a senha'
      />

      <Button
        title='Enviar'
      />

      {/* <Btn
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ["#FF9800", "#F44336"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
      >
  Linear Gradient
</Btn> */}
      
      
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  input:{
    width: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    padding: 5,
    textAlign:'center'
  }
});

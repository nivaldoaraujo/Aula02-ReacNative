import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Footer(){
    const imagem = ''

    return(
        <View style={styles.container} >
            <Text style={styles.texto}>Este componente é um Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#666',
      width: 500,
      height: 100,
      justifyContent: 'center',
     
    },
    texto: {
        color: 'white',
        // alignContent: 'center',
        // alignItems: 'center',
        textAlign: 'center',
        
        
    }
})
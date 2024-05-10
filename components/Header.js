import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header(){
    return(
        <View >
            <View 
            style={{
                backgroundColor: '#666',
                width: 500,
               
            }}
            >
            texto
            </View>
            {/* <Text style={{color: 'red'}}>Este componente é um Header</Text> */}
            <Image 
                source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxt-bYM3og0T5m1Hbnze4B6FfLk_Fgmedu92eHQ51Bgw&s"}}
                style={{ width: 500, height: 350 }}
            />
        </View>
    )
}
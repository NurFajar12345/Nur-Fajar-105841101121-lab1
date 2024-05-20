import { StyleSheet, Text, View } from 'react-native';
const TextCustom = () => {
    return (
        <View style={{
            flex: 1,
          backgroundColor: 'white',
          justifyContent: 'flex-start', //kolom
          alignItems: 'center', //baris
        }}>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginTop: 50,
            }}>
                Toko NF </Text>
            </View>
           
      )
    }
    export default TextCustom;
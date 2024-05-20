import { StyleSheet, Text, View, Button , Image} from "react-native";
const Image1 = () => {
    return (
        <>

        <Image source={require('./assets/NF.png')}
        style={{
            width: 100,
            height: 100,
            alignContent: 'center',
            justifyContent: 'flex-start',
            marginLeft :150 }}></Image>

            </>
    )
}
export default Image1
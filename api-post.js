import { StyleSheet, Text, View } from 'react-native'
import React, {useState , useEffect} from 'react'
import axios from 'axios'
import { TextInput } from 'react-native-web';
const LoginSimak = () => {
  const [data, setData] = useState({
    nim: '',
    password: ''
  });

  const onSubmit = () => {
    axios.post('https://api.beasiswa.unismuh.ac.id/api/login', {
      nim : data.nim,
      password : data.password
    })
  }
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems : 'center'
    }}>
      <View>
      <TextInput 
      onChangeText={(value) => setData({...data, nim: value})}
      placeholder="Nim"/>
      <TextInput 
      onChangeText={(value) => setData({...data, password: value})}
      placeholder="Password" />
      <Button title="Login" onPress={onSubmit} />
      </View>
    </View>
  )
}

export default LoginSimak

const styles = StyleSheet.create({})
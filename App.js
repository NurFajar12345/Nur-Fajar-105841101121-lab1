import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
const App = () => {
  const [formLogin, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const onSubmit = () => {
    if (formLogin.email === 'unismuh'
      && formLogin.password === 'unismuh') {
      alert('Login Berhasil')
    } else {
      alert('Login Gagal')
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Form Login</Text>
      <View>
        <Text>Email</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(hasil) => setForm({ ...formLogin, email: hasil })}
          value={formLogin.email}
        />
        <Text>Password</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => setForm({ ...formLogin, password: text })}
          value={formLogin.password}
        />
        <View style={{ marginTop: 10 }}>
          <Button title="Login" onPress={onSubmit} />
        </View>
        <View>
          <Text>Email: {formLogin.email}</Text>
          <Text>Password: {formLogin.password}</Text>
        </View>
      </View>
    </View>
  )
}
export default App
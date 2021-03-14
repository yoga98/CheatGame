import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILatas, ILbawah } from './assets/ilustrasion'

const App = () => {
  return (
    <View style={styles.header}>
      <ILatas />
      <View style={styles.wrapper}>
        <Text style={styles.tittle}>CheatGame</Text>
      </View>
      <View style={styles.bawah}>
        <ILbawah />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  header: { flex: 1, },
  wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tittle: {
    fontFamily: 'poppins',
    fontSize: 32,
    fontWeight: '500'
  },
  bawah: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
})

import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyHeder } from '../../assets/dummy'
import Header from '../../components/atoms/Header'

const Home = () => {
    return (
        <View>
            <Header />
            <ImageBackground source={DummyHeder} style={styles.page} />

        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        width: 360,
        height: 150
    }
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>CheatGame</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

    header: {
        width: 360,
        height: 50,
        backgroundColor: '#219653',
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 30,
        lineHeight: 24
    },
    wrapper: {
        justifyContent: 'center',
        flex: 1,

    }
})

import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


export default props => {
    const navigation = useNavigation()
    return (
        <View>

            <AntDesign name="left" style={styles.icons} size={26} color={'#001F54'} onPress={() => navigation.navigate('login')} />
            <Text style={styles.UserTitle}>UserForm</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    UserTitle: {
        marginTop: 50
    },
    icons: {
        marginTop: 50
    }
})
import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native'
import profilePhoto from '../../../assets/profilePhoto.jpg'
import guardianlogo from '../../../assets/whiteguardianlogo.png'
import ballvector from '../../../assets/Vector.png'

import { MotiView, MotiText } from 'moti'


export default function Offers() {
    return (
        <View style={styles.container}>
            <View style={styles.offers}>
                <View styles={styles.background}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 50
    },
    offers: {
        width: 300,
        height: 50
    },
    background: {
        color: '#FFBE0B'
    }
})
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


import { MaterialCommunityIcons } from '@expo/vector-icons';

import { MotiView, MotiText } from 'moti'

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={guardianlogo} style={styles.ImageLogoStyle} />
            </View>
            <View style={styles.profileContainer}>
                <Image source={profilePhoto} style={styles.ImageIconStyle} />
                <MotiView
                    style={styles.content}
                    from={{
                        translateY: -150,
                        opacity: 0,
                    }}
                    animate={{
                        translateY: 0,
                        opacity: 1,
                    }}
                    transition={{
                        type: "timing",
                        duration: 800,
                        delay: 300
                    }}

                >
                    <Text style={styles.username}>{name}</Text>

                    <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                        <Image source={ballvector} style={styles.ballIconStyle} />
                        <MaterialCommunityIcons name="bell" size={27} color="#FFF" />
                    </TouchableOpacity>
                </MotiView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#001F54',
        paddingTop: StatusBarHeight,
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    profileContainer: {
        marginTop: 8,
        flexDirection: 'row',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ImageLogoStyle: {
        height: 36,
        width: 120,
        marginRight: 8,
        borderRadius: 22,
        resizeMode: 'stretch',
    },
    ballIconStyle: {
        height: 500,
        width: 900,
        position: 'absolute'
    },
    ImageIconStyle: {
        height: 44,
        width: 44,
        marginRight: 8,
        borderRadius: 22,
        resizeMode: 'stretch',
    },
    username: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    logo: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: '900',
        fontFamily: 'Roboto',
    },
    buttonUser: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,

    }
})
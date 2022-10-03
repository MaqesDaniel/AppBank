import React from "react";

import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import avatar from '../../../assets/avatar.png'

export default function Suporte() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Precisa de ajuda?</Text>
            <Text style={styles.textContent}>Converse com a gente pelo chat.</Text>
            <View>
                <Image source={avatar} style={styles.avatar} />

                <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.areaButton}>
                        <AntDesign name="right" size={26} color={'#001F54'}></AntDesign>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        alignItems: 'flex-start',
        margin: 14,
        paddingTop: 8,
        paddingBottom: 8,
        borderWidth: 1,
        borderColor: '#D8DBE2',
        borderRadius: 12
    },
    textContent: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: '300',
        marginTop: 4,
        marginLeft: 120,
        marginBottom: 4
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 4,
        marginLeft: 120,
        marginBottom: 4
    },
    avatar: {
        width: 95,
        height: 95,
        marginTop: -60,
        marginLeft: 12,
        borderRadius: 12
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 36
    },
    areaButton: {
        marginTop: -80,
        marginLeft: 300
    }
})
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

import smartphone from '../../../assets/smartphone.png'

import { useNavigation } from '@react-navigation/native'

export default function Benefits() {
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false} >

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <MaterialCommunityIcons name="hand-coin" size={30} color={'#001F54'}></MaterialCommunityIcons>
                </View>
                <Text style={styles.labelButton}>Cashback</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Image source={smartphone} style={styles.phoneImg} />
                </View>
                <Text style={styles.labelButton}>Recarga</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <FontAwesome name="ticket" size={30} color={'#001F54'}></FontAwesome>
                </View>
                <Text style={styles.labelButton}>Vantagens</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="plus" size={26} color={'#001F54'}></AntDesign>
                </View>
                <Text style={styles.labelButton}>Ver mais</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    TransferIconStyle: {
        height: 40,
        width: 40
    },
    phoneImg: {
        height: 45,
        width: 45,
        marginLeft: 4
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 36,
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
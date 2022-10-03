import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

import imagePix from '../../../assets/logo-pix.png'
import transferIcon from '../../../assets/transfer.png'
import { useNavigation } from '@react-navigation/native';

export default function Actions() {
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false} >
            <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Transaction')}>
                <View style={styles.areaButton}>
                    <Image source={transferIcon} style={styles.TransferIconStyle} />
                </View>
                <Text style={styles.labelButton}>Transferências</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Image source={imagePix} style={styles.ImageIconStyle} />
                </View>
                <Text style={styles.labelButton}>Pix</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Cartoes')}>
                <View style={styles.areaButton}>
                    <AntDesign name="creditcard" size={26} color={'#001F54'}></AntDesign>
                </View>
                <Text style={styles.labelButton}>Cartões</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Ionicons name="ios-barcode-outline" size={26} color={'#001F54'} />
                </View>
                <Text style={styles.labelButton}>Pagamentos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <Feather name="user" size={26} color={'#001F54'}></Feather>
                </View>
                <Text style={styles.labelButton}>Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="barschart" size={26} color={'#001F54'}></AntDesign>
                </View>
                <Text style={styles.labelButton}>Investir</Text>
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
    ImageIconStyle: {
        height: 28,
        width: 28,
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 36
    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
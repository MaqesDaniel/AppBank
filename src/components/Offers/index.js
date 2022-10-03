import React from "react";

import { StyleSheet, View, Image, Text } from "react-native";

import backgroundImg from '../../../assets/back.png'
import microwave from '../../../assets/microwave.png'
import smartwatch from '../../../assets/smartwatch.png'
import smartTv from '../../../assets/smartTv.png'
import driver from '../../../assets/getCar.jpg'
import trip from '../../../assets/tripimg.png'


export default function Offers() {
    return (
        <View>
            <View style={styles.container}>

                <Text style={styles.title}>Guardian Shop</Text>
                <View>
                    <Image source={backgroundImg} style={styles.backgroundImg} />
                    <Image source={microwave} style={styles.microwave} />
                    <Image source={smartTv} style={styles.smartTv} />
                    <Image source={smartwatch} style={styles.smartwatch} />
                </View>
            </View>

            <View style={styles.servicesContainer}>
                <View style={styles.servicesCard}>
                    <Text style={styles.serviceTitle}>Financiamentos</Text>
                    <Image source={driver} style={styles.driverImg} />
                </View>
                <View style={styles.servicesCard}>
                    <Text style={styles.serviceTitle} >Viagens</Text>
                    <Image source={trip} style={styles.tripImg} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 14,
        paddingTop: 8,
        paddingBottom: 8,
        borderWidth: 1,
        borderColor: '#D8DBE2',
        borderRadius: 12
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 220,
        marginBottom: 4
    },
    backgroundImg: {
        width: 350,
        height: 110,
        borderRadius: 12
    },
    microwave: {
        width: 90,
        height: 60,
        position: 'absolute',
        marginLeft: 260,
        marginTop: 45
    },
    smartwatch: {
        width: 60,
        height: 60,
        position: 'absolute',
        marginLeft: 200,
        marginTop: 44,
        marginLeft: 34
    },
    smartTv: {
        width: 100,
        height: 50,
        position: 'absolute',
        marginTop: 15,
        marginLeft: -8
    },
    servicesContainer: {
        height: 160,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginLeft: 14,
        marginRight: 14,
        borderWidth: 1,
        borderColor: '#D8DBE2',
        borderRadius: 12,
        paddingTop: 8,
        paddingBottom: 8,
    },
    servicesCard: {
        width: 140,
        height: 140,
        marginLeft: 14,
        marginRight: 14,
        borderWidth: 1,
        borderColor: '#D8DBE2',
        borderRadius: 12,
    },
    serviceTitle: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    tripImg: {
        width: 90,
        height: 110,
        marginLeft: 25
    },
    driverImg: {
        width: 138,
        height: 118,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,

    }
})
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Movements({ data }) {
    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <View style={styles.content}>
                <View style={styles.imagebox}>
                    <Image style={styles.image(data.image.width, data.image.height)} source={data.image.src} />
                </View>
                <View style={styles.transactionDescription}>
                    <Text style={styles.date}>{data.date}</Text>
                    <Text style={styles.label}>{data.label}</Text>
                </View>
            </View>
            <View style={styles.transactionValue}>

                {showValue ? (
                    <Text style={data.type === 1 ? styles.receive : styles.expenses}>
                        {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}</Text>
                ) : (
                    <View style={styles.skeleton} >
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    receive: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#75c58e'
    },
    expenses: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    skeleton: {
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 4
    },
    imagebox: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: 50,
        height: 50,
        marginRight: 12,
    },

    image: (width, height) => ({
        display: 'flex',
        width: width ? width : 50,
        height: height ? height : 50,
        borderRadius: 10,
    }),
    transactionValue: {
        justifyContent: 'flex-end'
    },
    transactionDescription: {
        justifyContent: 'space-between'
    }
})
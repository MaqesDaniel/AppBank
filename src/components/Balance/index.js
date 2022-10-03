import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MotiView, MotiText } from 'moti'

export default function Balance({ saldo }) {
    const [showValue, setShowValue] = useState(false);

    return (
        <MotiView
            style={styles.container}
            from={{
                rotateX: '-100deg',
                opacity: 0,
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1
            }}
            transition={{
                type: 'timing',
                delay: 300,
                duration: 900
            }}
        >
            <TouchableOpacity onPress={() => setShowValue(!showValue)}>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>Saldo</Text>
                    {showValue ? (
                        <View style={styles.content}>
                            <Text style={styles.currencySymbol}>R$</Text>
                            <Text style={styles.balance}>{saldo}</Text>
                        </View>
                    ) : (
                        <View style={styles.skeleton}></View>
                    )}
                </View>
            </TouchableOpacity>

        </MotiView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -32,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 24,
        paddingTop: 26,
        paddingBottom: 26,
        zIndex: 99
    },
    itemTitle: {
        fontSize: 16,
        color: '#001F54',
        fontWeight: '400'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol: {
        color: '#000',
        marginRight: 6,
    },
    balance: {
        fontSize: 20,
        color: '#000',
        fontWeight: '600'
    },
    expenses: {
        fontSize: 20,
        color: '#6F8099'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 4
    }
})
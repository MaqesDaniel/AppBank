import React, { useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication'
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, TouchableHighlight, Text, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);

    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
        })();
    });

    function handleLogin() {
        if (isBiometricSupported) {
            LocalAuthentication.authenticateAsync()
                .then(({ success }) => {
                    if (success) {
                        navigation.navigate('Home')
                    }
                })
                .catch((error) => { console.log(error) })
        }
        else navigation.navigate('Home')
    }



    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image style={styles.wingLogo} source={require('../../../assets/guardianlogo.png')} />
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCorrect={false}
                    onChangeText={() => { }} />

                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    autoCorrect={false}
                    onChangeText={() => { }} />

                <TouchableHighlight style={styles.btnSubmit} onPress={handleLogin}>
                    <Text
                        style={styles.submitText}
                    >Entrar</Text>
                </TouchableHighlight>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.registerText} onPress={() => navigation.navigate('UserForm')}>Criar Conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    wingLogo: {
        width: 250,
        height: 40
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '90%',
        paddingTop: 15,
    },
    input: {
        justifyContent: 'flex-end',
        backgroundColor: '#FFF',
        width: 300,
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: '#E9ECF8',
        padding: 10,
    },
    btnSubmit: {
        backgroundColor: '#001F54',
        width: '85%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    submitText: {
        color: '#FFF',
        fontSize: 18,
    },
    btnRegister: {
        marginTop: 10
    },
    registerText: {
        color: '#001F54',
        fontWeight: '600'
    }
})

import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
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

                <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')}>
                    <Text
                        style={styles.submitText}
                    >Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.registerText}>Criar Conta</Text>
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

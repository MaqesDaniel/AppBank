import React from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


export default props => {
    const navigation = useNavigation()
    return (
        <View style={styles.FormPage}>
            <View style={styles.header}>
                <AntDesign name="left" style={styles.icons} size={26} color={'#001F54'} onPress={() => navigation.navigate('login')} />
                <Text style={styles.title}>Crie sua conta</Text>
                <AntDesign name="setting" style={styles.icons} size={24} color={'#001F54'} />
            </View>

            <View style={styles.FormContainer}>
                <View style={styles.Field}>
                    <Text style={styles.InputTitle}>Nome completo</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome completo'
                        autoCorrect={false}
                        onChangeText={() => { }} />
                </View>
                <View style={styles.Field}>

                    <Text style={styles.InputTitle}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        autoCorrect={false}
                        onChangeText={() => { }} />
                </View>
                <View style={styles.Field}>

                    <Text style={styles.InputTitle}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        autoCorrect={false}
                        onChangeText={() => { }} />
                </View>
                <View style={styles.Field}>

                    <Text style={styles.InputTitle}>Repetir senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Repetir senha'
                        autoCorrect={false}
                        onChangeText={() => { }} />
                </View>
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.registerText} onPress={() => navigation.navigate('login')}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    FormPage: {
        backgroundColor: '#FFF',
        height: '100%'
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginTop: 30,
    },
    icons: {
        marginTop: 22,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 14,
        marginLeft: 20,
        marginRight: 14,
    },
    FormContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    InputTitle: {
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#001F54',
        marginBottom: 8,
        marginLeft: 16
    },
    input: {
        justifyContent: 'flex-end',
        backgroundColor: '#FFF',
        width: 350,
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E9ECF8',
        padding: 10,
    },
    btnRegister: {
        backgroundColor: '#001F54',
        width: '85%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 280
    },
    registerText: {
        color: '#FFF',
        fontSize: 18,
    }
})
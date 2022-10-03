import { StyleSheet, FlatList, View, Text } from "react-native"

import Movements from '../../components/Movements';
import { AntDesign } from '@expo/vector-icons';


import netflixIcon from "../../../assets/netflix.png"
import receive from "../../../assets/receive.png"
import uber from "../../../assets/uber.png"
import pix from "../../../assets/logo-pix.png"


const list = [
    {
        id: 1,
        label: 'Netflix ',
        value: '39,90',
        date: '05/08',
        type: 0,
        image: { src: netflixIcon }
    },
    {
        id: 2,
        label: 'Pagamento recebido ',
        value: '15.000,00',
        date: '05/08',
        type: 1,
        image: { src: receive, width: 70, height: 70 }
    },
    {
        id: 3,
        label: 'Uber ',
        value: '10,75',
        date: '06/08',
        type: 0,
        image: { src: uber }
    },
    {
        id: 4,
        label: 'Pix recebido ',
        value: '150,00',
        date: '08/08',
        type: 1,
        image: { src: pix }
    },
]

export default function Transaction({ navigation }) {
    return (
        <View>
            <View style={styles.header}>
                <AntDesign name="left" style={styles.icons} size={26} color={'#001F54'} onPress={() => navigation.navigate('Home')} />
                <Text style={styles.title}>Extrato</Text>
                <AntDesign name="setting" style={styles.icons} size={24} color={'#001F54'} />
            </View>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    icons: {
        marginTop: 52,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 52,
        marginBottom: 14,
        marginLeft: 14,
        marginRight: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    },
});
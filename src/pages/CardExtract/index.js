import { StyleSheet, View, Image, Text, FlatList, ScrollView } from "react-native"

import { useNavigation } from '@react-navigation/native'
import GestureFlipView from 'react-native-gesture-flip-card'
import { AntDesign } from '@expo/vector-icons'

import Movements from "../../components/Movements";

import frontBlackCard from '../../../assets/frontBlackCard.png'
import backBlackCard from '../../../assets/backBlackCard.png'
import amazon from "../../../assets/amazonIcon.png"
import smartFit from "../../../assets/smartFitIcon.png"
import uber from "../../../assets/uber.png"
import shopee from "../../../assets/shopeeIcon.png"
import fastFood from "../../../assets/fastFood.png"


export default function CardExtract() {
    const list = [
        {
            id: 1,
            label: 'Amazon ',
            value: '665,50',
            date: '05/08',
            type: 0,
            image: { src: amazon }
        },
        {
            id: 2,
            label: 'SmartFit ',
            value: '89,90',
            date: '05/08',
            type: 0,
            image: { src: smartFit }
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
            label: 'Shopee ',
            value: '150,00',
            date: '08/08',
            type: 0,
            image: { src: shopee }
        }, {
            id: 5,
            label: 'Alimentação ',
            value: '532,36',
            date: '08/08',
            type: 0,
            image: { src: fastFood }
        },
    ]



    const navigation = useNavigation()
    return (
        <ScrollView>
            <View style={styles.header}>
                <AntDesign name="left" style={styles.icons} size={26} color={'#001F54'} onPress={() => navigation.navigate('Cartoes')} />
                <Text style={styles.title}>Cartões</Text>
                <AntDesign name="setting" style={styles.icons} size={24} color={'#001F54'} />
            </View>


            <View style={styles.cardContainer}>
                <GestureFlipView width={300} height={500} >
                    {renderFront()}
                    {renderBack()}
                </GestureFlipView>
            </View>


            <Text style={styles.title}>Utilizado</Text>
            <Text style={styles.valueDescription}>R$ 1.447,79</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </ScrollView>
    )
}

const renderFront = () => {
    return (
        <View style={styles.frontStyle}>
            <Image source={frontBlackCard} />
        </View>
    )
}

const renderBack = () => {
    return (
        <View style={styles.frontStyle}>
            <Image source={backBlackCard} />
        </View>
    )
}

const styles = StyleSheet.create({
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
    cardContainer: {
        marginTop: -100,
        marginBottom: -120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    valueDescription: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20
    },

    list: {
        marginTop: 20,
        marginStart: 14,
        marginEnd: 14,
    },
})
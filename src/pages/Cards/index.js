
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"

import { AntDesign } from '@expo/vector-icons';

import frontBlackCard from '../../../assets/frontBlackCard.png'
import frontBlueCard from '../../../assets/frontBlueCard.png'
import frontWhiteCard from '../../../assets/frontWhiteCard.png'
import { ScrollView } from "moti";


export default function Cartoes({ navigation }) {
    return (
        <ScrollView>

            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <AntDesign name="left" style={styles.icons} size={26} color={'#001F54'} onPress={() => navigation.navigate('Home')} />
                    <Text style={styles.title}>Cartões</Text>
                    <AntDesign name="setting" style={styles.icons} size={24} color={'#001F54'} />
                </View>





                <ScrollView style={styles.cardContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.Cards}>
                        <TouchableOpacity onPress={() => navigation.navigate('CardExtract')}>
                            <Image source={frontBlackCard} style={styles.cardImages} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={frontBlueCard} style={styles.cardImages} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={frontWhiteCard} style={styles.cardImages} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>




                <View>
                    <Text style={styles.title}>Limite de Crédito</Text>
                    <View style={styles.description}>
                        <Text style={styles.textDescription}>Utilizado</Text>
                        <Text style={styles.textDescription}>Disponível</Text>
                    </View>
                    <View style={styles.values}>
                        <Text style={styles.valueDescription}>R$ 1.447,79</Text>
                        <Text style={styles.valueDescription}>R$ 8.552,21</Text>
                    </View>
                    <View style={styles.limitBar}>
                        <View style={styles.usedLimit}></View>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Próximas faturas</Text>
                    <View style={styles.invoice}>
                        <View style={styles.invoiceHeader}>
                            <Text style={styles.invoiceTitle}>Outubro</Text>
                            <Text style={styles.invoiceValue}>R$ 1.447,79</Text>
                        </View>
                        <View style={styles.invoiceContent}>
                            <View style={styles.invoiceDate}>
                                <Text style={styles.textContent}>Dia de vencimento</Text>
                                <Text style={styles.dayContent}>10/10</Text>
                            </View>
                            <View style={styles.invoiceDate}>

                                <Text style={styles.textContent}>Melhor dia de compra</Text>
                                <Text style={styles.dayContent}>01/10</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnPurchases}>
                    <Text style={styles.purchasesTitle}>Mostrar todas as compras</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

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
    cardContainer: {
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 20,
        marginRight: 20
    },
    Cards: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    cardImages: {
        marginRight: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 22,
        marginBottom: 14,
        marginLeft: 14,
        marginRight: 14,
    },
    description: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    textDescription: {
        color: 'gray'
    },
    values: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    valueDescription: {
        fontWeight: 'bold',
        marginTop: 8
    },
    limitBar: {
        width: '92%',
        height: 25,
        marginLeft: 16,
        marginTop: 8,
        backgroundColor: '#D8DBE2',
        borderRadius: 4
    },
    usedLimit: {
        width: '15%',
        height: 25,
        backgroundColor: '#001F54',
        borderRadius: 4
    },
    invoice: {
        width: 180,
        height: 200,
        borderWidth: 1,
        borderColor: '#D8DBE2',
        borderRadius: 10,
        marginLeft: 16
    },
    invoiceHeader: {
        backgroundColor: '#C9E1FC',
        borderRadius: 10
    },
    invoiceTitle: {
        fontWeight: 'bold',
        margin: 8
    },
    invoiceValue: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 8
    },
    invoiceContent: {
        justifyContent: 'space-between',
        paddingHorizontal: 4,
        marginTop: 8
    },
    invoiceDate: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textContent: {
        fontSize: 12,
        color: 'gray'
    },
    dayContent: {
        fontWeight: 'bold',
        color: 'gray'
    },
    btnPurchases: {
        color: '#001F54',
        marginHorizontal: 16,
        marginTop: 16,
    },
    purchasesTitle: {
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#001F54',
        borderRadius: 6,
        textAlign: 'center',
        padding: 6,
    }
});
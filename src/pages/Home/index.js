import { StyleSheet, Text, FlatList, View } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

import netflixIcon from "../../../assets/netflix.png"
import receive from "../../../assets/receive.png"
import uber from "../../../assets/uber.png"
import pix from "../../../assets/logo-pix.png"
import Offers from '../../components/Offers';


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

export default function Home() {
  return (
    <View style={styles.container}>
      <Header logo="Guardian" name="Daniel Marques" />

      <Balance saldo="9.250,00" />
      <Actions />
      <Text style={styles.title}>Extrato</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
      <Offers />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 14,
    marginLeft: 14,
    marginRight: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});

import { StyleSheet, ScrollView } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Actions from '../../components/Actions';
import Offers from '../../components/Offers';
import Benefits from '../../components/Benefits'
import Suporte from '../../components/SAC'

export default function Home() {
  return (
    <ScrollView style={styles.container} vertical={true} showsVerticalScrollIndicator={false}>
      <Header logo="Guardian" name="Daniel Marques" />
      <Balance saldo="9.250,00" />
      <Actions />
      <Offers />
      <Benefits />
      <Suporte />
    </ScrollView>
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

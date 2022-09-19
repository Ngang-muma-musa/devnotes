import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Search from 'react-native-vector-icons/EvilIcons';
import More from 'react-native-vector-icons/MaterialIcons';
import File from 'react-native-vector-icons/AntDesign';
import Card from './components/card';

const { width: wWidth } = Dimensions.get("screen");

const data = [

  {
    id: 1,
    title: "Drinks",
    date: "sep 16, 2022",
    notes: "Pour acheter un nouveau pass internet, connectez-vous sur My Orange "
  },
  {
    id: 2,
    title: "Drinks",
    date: "sep 16, 2022",
    notes: "Pour acheter un nouveau pass internet, recharger votre compte ou consulter votre solde, connectez-vous sur My Orange "
  },
  {
    id: 3,
    title: "Drinks",
    date: "sep 16, 2022",
    notes: "Pour acheter un nouveau pass internet, rechasulter votre solde, connectez-vous sur My Orange "
  },
  {
    id: 4,
    title: "Drinks",
    date: "sep 16, 2022",
    notes: "Pour acheter un nou, recharger votre compte ou consulter votre solde, connectez-vous sur My Orange "
  },
  {
    id: 5,
    title: "Drinks",
    date: "sep 16, 2022",
    notes: "Pour acheter un noue, connectez-vous sur My Orange "
  },
  {
    id: 6,
    title: "Drinks",
    date: "sep 16, 2022",
    notes: "Pour acheter un nouveau pass internet, recharger sur My Orange "
  },
  {
    id: 7,
    title: "Drinks",
    date: "sep 16, 2022",
    notes: "Pour acheter un nouveau pass internet, recharger votre compte ou consulter votre solde, connectez-vous sur My Orange "
  },
  {
    id: 7,
    title: "Drinks",
    date: "sep 16, 2022",
    notes: "Pour acheteecharger votre compte ou consulter votre solde, connectez-vous sur My Orange "
  }

];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#FAA030' }}>
        <View style={{
          flex: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{ fontSize: 33, fontWeight: '300' }}>All notes</Text>
          <Text style={{ fontSize: 15, fontWeight: '300' }}>10 Notes</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 2, justifyContent: 'center' }}>
              <Icon name="menu" size={20} color="#900" />
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
              <File name="addfile" size={20} color="#900" />
              <Search name="search" size={30} color="#900" />
              <More name="more-vert" size={30} color="#900" />
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1.5, backgroundColor: '#32B76C' }}>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
          <View flexDirection="row" style={{ paddingTop: 10, justifyContent: 'space-between' }}>
            <View >
              {data.filter((_,i)=>i%2 !==0).map((data)=>(<Card key={data.id} title={data.title} date={data.date} notes={data.notes}/>))}
            </View>
            <View>
            {data.filter((_,i)=>i%2 ==0).map((data)=>(<Card key={data.id} title={data.title} date={data.date} notes={data.notes}/>))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.button}>
          <More name="add" size={30} color="#900" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '80%',
    bottom: '7%',
    elevation: 1,
  },
  
});

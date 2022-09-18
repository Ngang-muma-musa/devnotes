import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Search from 'react-native-vector-icons/EvilIcons';
import More from 'react-native-vector-icons/MaterialIcons';
import File from 'react-native-vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1,backgroundColor:'#FAA030'}}>
          <View style={{
            flex:4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{fontSize:33,fontWeight:'300'}}>All notes</Text>
            <Text style={{fontSize:15,fontWeight:'300'}}>10 Notes</Text>
          </View>
          <View style={{flex:1,backgroundColor:'blue',alignItems:'center',justifyContent:'center',paddingHorizontal:15}}>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:2, justifyContent:'center'}}>
              <Icon name="menu" size={20} color="#900" />
              </View>
              <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
              <File name="addfile" size={20} color="#900" />
              <Search name="search" size={30} color="#900" />
              <More name="more-vert" size={30} color="#900" />
              </View>
            </View>
          </View>
      </View>
      <View style={{flex: 1.5,backgroundColor:'#32B76C'}}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

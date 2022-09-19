import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Search from 'react-native-vector-icons/EvilIcons';
import File from 'react-native-vector-icons/AntDesign';
import More from 'react-native-vector-icons/MaterialIcons';

const Nav = props => {
    return (
        <View style={styles.nav}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Icon name="menu" size={20} color="white" />
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                    <File name="addfile" size={20} color="#fff" />
                    <Search name="search" size={30} color="#fff" />
                    <More name="more-vert" size={30} color="#fff" />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    nav: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    }
});
export default Nav;
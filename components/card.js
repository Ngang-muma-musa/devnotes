import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const Card = props => {
    return (
        <View style={styles.card}>
            <Text style={{ marginBottom: -1, fontSize: 19, fontWeight: "500",color:'white'}}>{props.title}</Text>
            <Text style={{ marginBottom: 8, fontSize: 12 ,color:'white',fontWeight:'100'}}>{props.date}</Text>
            <Text style={{color:'white',fontWeight:"300",lineHeight:25}}>{props.notes}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        width: 165,
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        borderRadius: 10,
        marginBottom: 10
      }
});

export default Card;
import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const Card = props => {
    return (
        <View style={styles.card}>
            <Text style={{ marginBottom: -1, fontSize: 19, fontWeight: "500" }}>{props.title}</Text>
            <Text style={{ marginBottom: 8, fontSize: 12 }}>{props.date}</Text>
            <Text>{props.notes}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        width: 165,
        backgroundColor: 'white',
        opacity: 0.5,
        borderRadius: 10,
        marginBottom: 10
      }
});

export default Card;
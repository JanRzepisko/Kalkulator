import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const UpKey = ({char, OnPress}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={OnPress} style={styles.item}>
                <Text style={styles.key}>{char}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignContent: 'space-between',
    },
    key: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        fontSize: 30,
        color: '#edf2f4',
    },
    item:{
        padding: '5%',
        alignItems: 'center',
        borderBottomColor: '#fca311',
        borderBottomWidth: 1
    }
})


export default UpKey;

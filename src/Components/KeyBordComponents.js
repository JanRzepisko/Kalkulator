import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Key = ({char, actionChar,  onPress}) => {
    if(char == 'SPACE'){
        return(
        <View style={styles.container}>
            <View style={[styles.item, {backgroundColor: 'transparent'}]} />
        </View>
        )
    }

    console.log((actionChar == char) +  ' ' + char + ' ' + actionChar)

    return(
        <View style={styles.container}>
            <TouchableOpacity style={(actionChar != char ? styles.activeItem : styles.item)} onPress={onPress}><Text style={styles.key}>{char}</Text></TouchableOpacity>
        </View>
        )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        marginVertical: 8
    },
    key: {
        fontSize: 30,
        color: '#edf2f4',
    },
    item:{
        backgroundColor: '#8d99ae',
        justifyContent: 'center',
        alignItems:  'center',
        borderRadius: 100,
        width: 70,
        height: 70,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    activeItem:{
        backgroundColor: '#8d99ae',
        justifyContent: 'center',
        alignItems:  'center',
        borderRadius: 100,
        width: 70,
        height: 70,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})

export default Key
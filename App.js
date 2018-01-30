import React, { Component } from 'react';
import {View, Text, styles, StyleSheet, backgroundColor, borderWidth, marginTop, textAlign, fontsize} from 'react-native';

export class extends Component {
    render(){
        return(
            <View style={styles.parent}>
                <Text style={styles.child}> Child one </Text>
                <Text style={styles.child}> Child Two </Text>
                <Text style={styles.child}> Child Three </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: '#F5FCFF',
//        borderColor: '#0099AA',
        borderWidth: 5,
        marginTop: 30
    },
    child: {
        borderColor: '#AA0099',
        borderWidth: 2,
//        textAlign: 'Center',
        fontSize: 24,
    }
});

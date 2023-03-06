import React from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";
import { View } from "react-native-web";

export default function Body() {
    const[aedge, setAedge] = React.useState('');
    const[bedge, setBedge] = React.useState('');
    const[cedge, setCedge] = React.useState('');
    const[volume, setVolume] = React.useState('');

    function onCalcButton() {
        let volume = aedge * bedge * cedge
        setVolume(volume);
    }
    return(
        <View style={styles.container}>
            <Text>a él</Text>
            <TextInput onChangeText={(res) => {setAedge(res)}}
            style={styles.input}
            />
            <Text>b él</Text>
            <TextInput onChangeText={(res) => {setBedge(res)}}
            style={styles.input}
            />
            <Text>c él</Text>
            <TextInput onChangeText={(res) => {setCedge(res)}}
            style={styles.input}
            />

            <Button title="Számol" onPress={onCalcButton}/>

            <Text>Térfogat</Text>
            <TextInput onChangeText={(res) => {setVolume(res)}}
            style={styles.input}
            value={volume}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    },
    input: {
        backgroundColor: 'white',
        width: '80%',
        height: 30,
    }
});
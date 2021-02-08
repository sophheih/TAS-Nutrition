import React from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
const Add = () => {
    return (
        <View style={styles.add}>
            <Text style={styles.text}>Cafeterias</Text>
            <Button style={styles.button}
                title="Tray Lunch"
                type="outline"
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Tray Lunch
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Tray Lunch
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Tray Lunch
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Tray Lunch
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Tray Lunch
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Tray Lunch
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Finish
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    add: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        padding: 10,
        paddingLeft: 200,
        justifyContent: 'center',
    },
    button: {
        margin: 20,
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',

    },
})

export default Add;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Add = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}> Cafeteria </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Tray Lunch
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Salad Bar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Pizza Bar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Snack Bar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Fitness Cafe
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Others
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Others
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 17,
        padding: 10,
        paddingLeft: 190,
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#6C757D'
    },
    button: {
        margin: 5,
        marginHorizontal: 100,
        padding: 10,
        paddingTop: 20,
        height: 100,
        borderRadius: 9,
        backgroundColor: '#D0D0D0',
        alignItems: 'center'
    },
    buttonText: {
        color: 'black',
        fontSize: 17,
        justifyContent: 'center',
        padding: 10,
    }
})

export default Add;
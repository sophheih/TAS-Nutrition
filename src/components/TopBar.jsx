import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TopBar extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.text} >Add</Text>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 70,
        width: 450, // row
        alignItems: 'center',
        backgroundColor: '#264653',
        paddingHorizontal: 50,
        paddingTop: 20

    },
    text: {
        color: 'white',
        fontSize: 25,
    }
});

export default TopBar;
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PropsType {
    id: number;
    x: number;
    y: number;
}

export const Player = (props: PropsType) => {
    const { id, x, y } = props;

    return (
        <View style={[styles.playerContainer, { top: x, left: y }]}>
            <View style={styles.player}>
                <Text style={styles.playerText}>{id}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    playerContainer: {
        position: 'absolute',
    },
    player: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'blue',
    },
    playerText: {
        fontSize: 12,
        color: 'white'
    }
});
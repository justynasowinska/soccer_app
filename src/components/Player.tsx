import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

interface PropsType {
    id: number;
    x: number;
    y: number;
}

export const Player = (props: PropsType) => {
    const { id, x, y } = props;
    const [position] = useState(new Animated.ValueXY());

    position.setValue({ x, y });

    const leftPosition = position.x.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%']
    });

    const bottomPostion = position.y.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%']
    });

    return (
        <Animated.View style={[styles.playerContainer, { left: leftPosition, bottom: bottomPostion }]}>
            <View style={styles.player}>
                <Text style={styles.playerText}>{id}</Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    playerContainer: {
        position: 'absolute',
    },
    player: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: 'blue',
    },
    playerText: {
        fontSize: 12,
        color: 'white'
    }
});
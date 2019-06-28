import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { colors } from '../utils/colors';

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
                <View style={styles.playerInner}>
                    <Text style={styles.playerText}>{id}</Text>
                </View>
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
        width: 35,
        height: 35,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.blue
    },
    playerInner: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: '80%',
        height: '80%',
        backgroundColor: colors.blue,
    },
    playerText: {
        fontSize: 14,
        color: colors.mainLight
    }
});
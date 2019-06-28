import * as React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Player } from './Player';

import { data } from '../../assets/data';

export const SoccerBoard = () => {
    const playerPostions = data.player_positions[0];

    const countPosX = (pos: number) => {
        return `${pos * 100}%`;
    };

    const countPosY = (pos: number) => {
        return `${pos * 100}%`;
    }

    return (
        <View style={styles.soccerBoardContainer}>
            <ImageBackground
                source={require('../../assets/images/soccer.png')}
                resizeMode="contain"
                style={styles.imageBackground}
            >
                { playerPostions.map(player => {
                    return (
                        <Player
                            key={player[0]}
                            id={player[0]}
                            x={countPosX(player[1])}
                            y={countPosY(player[2])}
                        />
                    );
                }) }
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    soccerBoardContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    imageBackground: {
        position: 'relative',
        height: '100%',
        aspectRatio: 2.2142286171,
    }
});
import * as React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

import { Player } from './Player';
import { playersData } from '../utils/dataUtils';

interface PropsType {
    currentTime: number;
}

export const SoccerBoard = (props: PropsType) => {
    const playersIndex = Math.floor(props.currentTime / 100); // time interval
    const playerPostions = playersData.player_positions[playersIndex];

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
                            x={player[1]}
                            y={player[2]}
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
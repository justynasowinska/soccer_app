import * as React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

import { Player } from './Player';
import { getPlayerPositions } from '../utils/dataUtils';

interface PropsType {
    currentTime: number;
}

export const SoccerBoard = (props: PropsType) => {
    return (
        <View style={styles.soccerBoardContainer}>
            <ImageBackground
                source={require('../../assets/images/soccer.png')}
                resizeMode="contain"
                style={styles.imageBackground}
            >
                { getPlayerPositions(props.currentTime).map(player => {
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
        maxWidth: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 2.2142286171,
    },
    imageBackground: {
        position: 'relative',
        width: '100%',
        aspectRatio: 2.2142286171,
    }
});
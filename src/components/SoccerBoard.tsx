import * as React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Player } from './Player';

export const SoccerBoard = () => {
    return (
        <View style={styles.soccerBoardContainer}>
            <ImageBackground
                source={require('../../assets/images/soccer.png')}
                resizeMode="contain"
                style={styles.imageBackground}
            >
                <Player id={1} x={10} y={10} />
                <Player id={2} x={20} y={20} />
                <Player id={3} x={30} y={30} />
                <Player id={4} x={40} y={40} />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    soccerBoardContainer: {
        width: '100%',
        flex: 1
    },
    imageBackground: {
        width: '100%',
        height: '100%'
    }
});
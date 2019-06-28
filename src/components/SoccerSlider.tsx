import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

import { formatMsToString } from '../utils/dataUtils';

interface PropsType {
    currentTime: number;
    totalTime: number;
    value: number;
    onValueChange: (value: number) => void;
}

export const SoccerSlider = (props: PropsType) => {
    const { currentTime, totalTime, onValueChange, value } = props;

    return (
        <View style={styles.container}>
            <Text style={[styles.timeText, { left: 0 }]}>{formatMsToString(currentTime)}</Text>
            <Slider
                maximumValue={totalTime}
                minimumValue={0}
                onValueChange={onValueChange}
                value={value}
            />
            <Text style={[styles.timeText, { right: 0 }]}>{formatMsToString(totalTime)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
    },
    timeText: {
        position: 'absolute',
        bottom: -10,
        fontSize: 13,
    }
});
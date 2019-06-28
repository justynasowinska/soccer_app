import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slider } from 'react-native-elements';

import { formatMsToString } from '../utils/dataUtils';
import { colors } from '../utils/colors';

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
                thumbTintColor={colors.blue}
                thumbTouchSize={{ width: 70, height: 70 }}
                minimumTrackTintColor={colors.blue}
                maximumTrackTintColor={'rgba(255, 255, 255, 0.4)'}
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
        fontWeight: 'bold',
        color: colors.mainLight
    }
});
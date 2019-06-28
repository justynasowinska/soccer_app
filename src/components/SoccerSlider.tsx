import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

interface PropsType {
    currentTime: number;
    summaryTime: number;
    onValueChange: (value: number) => void;
}

export const SoccerSlider = (props: PropsType) => {
    const { currentTime, summaryTime, onValueChange } = props;

    return (
        <View style={styles.container}>
            <Text style={[styles.timeText, { left: 0 }]}>00:00:01</Text>
            <Slider
                value={currentTime}
                maximumValue={summaryTime}
                minimumValue={0}
                onValueChange={onValueChange}
            />
            <Text style={[styles.timeText, { right: 0 }]}>00:04:01</Text>
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
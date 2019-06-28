import * as React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, ViewStyle } from 'react-native';

interface PropsType {
    isPaused: boolean;
    onPress: () => void;
    containerStyles: ViewStyle;
}

export const SessionButton = (props: PropsType) => {
    const getButtonTitle = (isPaused: boolean): string => {
        return isPaused ? 'Run Session' : 'Pause Session';
    };

    const { isPaused, onPress, containerStyles } = props;

    return (
        <Button
            title={getButtonTitle(isPaused)}
            onPress={onPress}
            containerStyle={[styles.buttonContainer, containerStyles]}
        />
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 10,
        marginTop: 10,
    }
});
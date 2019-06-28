import * as React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

interface PropsType {
    isPaused: boolean;
    onPress: () => void;
}

export const SessionButton = (props: PropsType) => {
    const getButtonTitle = (isPaused: boolean): string => {
        return isPaused ? 'Start Session' : 'Pause Session';
    };

    const { isPaused, onPress } = props;

    return (
        <Button
            title={getButtonTitle(isPaused)}
            onPress={onPress}
            containerStyle={styles.buttonContainer}
        />
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 10,
        marginTop: 10
    }
});
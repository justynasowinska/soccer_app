import * as React from 'react';
import { Button, Icon } from 'react-native-elements';
import { StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../utils/colors';

interface PropsType {
    isPaused: boolean;
    onPress: () => void;
    containerStyles: ViewStyle;
}

export const SessionButton = (props: PropsType) => {
    const getButtonTitle = (paused: boolean): string => {
        return paused ? 'Run Session' : 'Pause Session';
    };

    const getIcon = (paused: boolean): string => {
        return paused ? 'play' : 'pausecircle';
    }

    const { isPaused, onPress, containerStyles } = props;

    return (
        <Button
            title={getButtonTitle(isPaused)}
            onPress={onPress}
            containerStyle={[styles.buttonContainer, containerStyles]}
            buttonStyle={styles.button}
            titleStyle={styles.textStyle}
            type="outline"
            icon={
                <Icon
                    name={getIcon(isPaused)}
                    type="antdesign"
                    size={20}
                    color={colors.mainLight}
                    iconStyle={styles.iconStyle}
                />
            }
        />
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 10,
        marginTop: 10,
        width: 200,
    },
    button: {
        borderColor: colors.mainLight,
        borderWidth: 2,
        borderRadius: 50
    },
    textStyle: {
        color: colors.mainLight,
        fontSize: 15,
    },
    iconStyle: {
        marginRight: 10
    }
});
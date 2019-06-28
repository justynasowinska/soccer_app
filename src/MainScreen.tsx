import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { SessionButton } from './components/SessionButton';
import { SoccerBoard } from './components/SoccerBoard';
import { SoccerSlider } from './components/SoccerSlider';

interface PropTypes {
    //
}

interface StateType {
    isPaused: boolean;
    currentTime: number;
}

export class MainScreen extends React.Component<PropTypes, StateType> {
    state: StateType = {
        isPaused: true,
        currentTime: 0
    };

    render() {
        const { isPaused } = this.state;

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaContainer}>
                    <SessionButton
                        isPaused={isPaused}
                        onPress={this.toggleSession}
                    />
                    <SoccerBoard />
                    <SoccerSlider
                        currentTime={10}
                        summaryTime={50}
                        onValueChange={this.onSliderValueChange}
                    />
                </SafeAreaView>
            </View>
        );
    }

    toggleSession = () => {
        this.setState({
            isPaused: !this.state.isPaused
        });
    }

    onSliderValueChange = (value: number) => {
        this.setState({
            currentTime: value
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeAreaContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
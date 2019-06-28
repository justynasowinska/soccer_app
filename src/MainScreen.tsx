import * as React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { SessionButton } from './components/SessionButton';
import { SoccerBoard } from './components/SoccerBoard';
import { SoccerSlider } from './components/SoccerSlider';
import { TOTAL_TIME } from './utils/dataUtils';

interface StateType {
    isPaused: boolean;
    currentTime: number;
    sliderValue: number;
}

export class MainScreen extends React.Component<{}, StateType> {
    state: StateType = {
        isPaused: true,
        currentTime: 0,
        sliderValue: 0
    };

    render() {
        const { isPaused, sliderValue, currentTime } = this.state;

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaContainer}>
                    <SessionButton
                        isPaused={isPaused}
                        onPress={this.toggleSession}
                    />
                    <SoccerBoard currentTime={currentTime} />
                    <SoccerSlider
                        value={sliderValue}
                        currentTime={this.state.currentTime}
                        totalTime={TOTAL_TIME}
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
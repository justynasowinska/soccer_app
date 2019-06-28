import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { SessionButton } from './components/SessionButton';
import { SoccerBoard } from './components/SoccerBoard';
import { SoccerSlider } from './components/SoccerSlider';
import { TOTAL_TIME } from './utils/dataUtils';
import { colors } from './utils/colors';

interface StateType {
    isPaused: boolean;
    currentTime: number;
    sliderValue: number;
}

export class MainScreen extends React.Component<{}, StateType> {
    clearInterval = 0;

    state: StateType = {
        isPaused: true,
        currentTime: 0,
        sliderValue: 0
    };

    componentWillUnmount() {
        clearInterval(this.clearInterval);
    }

    render() {
        const { isPaused, sliderValue, currentTime } = this.state;

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaContainer}>
                    <SessionButton
                        isPaused={isPaused}
                        onPress={this.toggleSession}
                        containerStyles={styles.buttonContainer}
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
        const { isPaused } = this.state;

        if (isPaused) {
            this.runTimer();
        } else {
            this.pauseTimer();
        }

        this.setState({
            isPaused: !this.state.isPaused
        });
    }

    onSliderValueChange = (value: number) => {
        this.pauseTimer();

        this.setState({
            currentTime: value,
            isPaused: true
        });
    }

    runTimer = () => {
        this.clearInterval = setInterval(() => {
            const newTime = this.state.currentTime + 100;

            this.setState({
                currentTime: newTime,
                sliderValue: newTime
            });
        }, 100);
    }

    pauseTimer = () => {
        clearInterval(this.clearInterval);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainDark
    },
    safeAreaContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 40
    },
    buttonContainer: {
        alignSelf: 'flex-start',
    }
});
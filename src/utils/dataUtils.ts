import { data } from '../../assets/data';

export const formatMsToString = (time: number): string => {
    const ms = time % 1000;
    time = (time - ms) / 1000;
    const secs = time % 60;
    time = (time - secs) / 60;
    const mins = time % 60;
    const hrs = (time - mins) / 60;

    return `${formatTime(hrs)}:${formatTime(mins)}:${formatTime(secs)}`;
};

export const formatTime = (time: number): string => {
      return time < 10 ? `0${time}` : `${time}`;
};

const TIME_INTERVAL: number = data.interval;
const TOTAL_TIME: number = (data.player_positions.length - 1) * TIME_INTERVAL;

export {
    data as playersData,
    TIME_INTERVAL,
    TOTAL_TIME
};
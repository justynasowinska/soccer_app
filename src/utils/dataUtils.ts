import { data } from '../../assets/data';

const TIME_INTERVAL: number = data.interval;
const TOTAL_TIME: number = (data.player_positions.length - 1) * TIME_INTERVAL;

/**
 * Converts givent numer to time format '00:00:00'.
 * @param {number} time     Number to format.
 */
export const formatMsToString = (time: number): string => {
    const ms = time % 1000;
    time = (time - ms) / 1000;
    const secs = time % 60;
    time = (time - secs) / 60;
    const mins = time % 60;
    const hrs = (time - mins) / 60;

    return `${formatTime(hrs)}:${formatTime(mins)}:${formatTime(secs)}`;
};

/**
 * Converts given number to two-digital number format ('00').
 * @param {number} time     Number to format.
 */
export const formatTime = (time: number): string => {
      return time < 10 ? `0${time}` : `${time}`;
};

/**
 * Gets player positions based on currentTime and data with positions.
 * @param {number} currentTime      Current time that passed.
 */
export const getPlayerPositions = (currentTime: number): Array<any> => {
    const playersIndex = Math.floor(currentTime / TIME_INTERVAL);

    return data.player_positions[playersIndex];
};

export {
    TIME_INTERVAL,
    TOTAL_TIME
};
export const formatMsToString = (s: number) => {
    const ms = s % 1000;
    s = (s - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;
    const hrs = (s - mins) / 60;

    return `${formatTime(hrs)}:${formatTime(mins)}:${formatTime(secs)}`;
  };

  const formatTime = (time: number) => {
      return time < 10 ? `0${time}` : time;
  };
import { formatTime, formatMsToString } from "../dataUtils";

describe('formatTime method', () => {
    it('returns additional 0 for numbers less than 10', () => {
        expect(formatTime(5)).toBe('05');
    });

    it('returns same number for values greater or equal than 10', () => {
        expect(formatTime(10)).toBe('10');
        expect(formatTime(155)).toBe('155');
    });
});

describe('formatMsToString method', () => {
    it('returns correct value for 0', () => {
        expect(formatMsToString(0)).toBe('00:00:00');
    });

    it('returns correct value for number greater than 0', () => {
        expect(formatMsToString(45454)).toBe('00:00:45');
    });
});
const canAttendMeetings = require('./_252');

test('test11', () => {
    const intervals = [[0, 30], [5, 10], [15, 20]];

    const result = canAttendMeetings(intervals);

    expect(result).toBeFalsy();
});

test('test12', () => {
    const intervals = [[7, 10], [2, 4]];

    const result = canAttendMeetings(intervals);

    expect(result).toBeTruthy();
});
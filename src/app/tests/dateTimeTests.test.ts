import { getDefaultDateTime } from '../getDefaultDateTime'

const DATE_TIME_DATA = [
    { time: 'December 17, 1995 03:00:00', minutes: 30, hours: 3 },
    { time: 'December 17, 1995 03:01:00', minutes: 45, hours: 3 },
    { time: 'December 17, 1995 03:15:00', minutes: 45, hours: 3 },
    { time: 'December 17, 1995 03:16:00', minutes: 0, hours: 4 },
    { time: 'December 17, 1995 03:30:00', minutes: 0, hours: 4 },
    { time: 'December 17, 1995 03:40:00', minutes: 15, hours: 4 },
    { time: 'December 17, 1995 03:45:00', minutes: 15, hours: 4 },
    { time: 'December 17, 1995 03:55:00', minutes: 30, hours: 4 },
]


describe('Default datetime (for user input form)', () => {

    test('is properly set to at least half an hour in the future with 0, 15, 30, or 45 minutes ', () => {

        DATE_TIME_DATA.forEach(item => {
            const dateTime = new Date(item.time)
            const result = getDefaultDateTime(dateTime)
            expect(result.getMinutes()).toBe(item.minutes)
            expect(result.getHours()).toBe(item.hours)
        })
        
        
    })

})
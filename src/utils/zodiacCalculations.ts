import { DateTime } from 'luxon'

interface ZodiacPeriod {
    sign: string;
    startMonth: number;
    startDay: number;
    endMonth: number;
    endDay: number;
}

const astrologicalDates: ZodiacPeriod[] = [
    { sign: 'Aries', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
    { sign: 'Taurus', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
    { sign: 'Gemini', startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
    { sign: 'Cancer', startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
    { sign: 'Leo', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
    { sign: 'Virgo', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
    { sign: 'Libra', startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
    { sign: 'Scorpio', startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
    { sign: 'Sagittarius', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 },
    { sign: 'Capricorn', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },
    { sign: 'Aquarius', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
    { sign: 'Pisces', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 }
]

export function getAstronomicalSign(date: DateTime): string {
    // Placeholder for astronomical calculations
    return getAstrologicalSign(date)
}

export function getAstrologicalSign(date: DateTime): string {
    const month: number = date.month
    const day: number = date.day

    for (const period of astrologicalDates) {
        // Handle year wrap-around for Capricorn
        if (period.sign === 'Capricorn') {
            if ((month === 12 && day >= period.startDay) || (month === 1 && day <= period.endDay)) {
                return period.sign
            }
            continue
        }

        // Handle all other signs
        if (
            (month === period.startMonth && day >= period.startDay) ||
            (month === period.endMonth && day <= period.endDay)
        ) {
            return period.sign
        }
    }

    return 'Unknown'
}
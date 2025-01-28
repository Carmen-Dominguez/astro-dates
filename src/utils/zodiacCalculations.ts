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

const astronomicalDates: ZodiacPeriod[] = [
    { sign: 'Capricorn', startMonth: 1, startDay: 19, endMonth: 2, endDay: 15 },
    { sign: 'Aquarius', startMonth: 2, startDay: 16, endMonth: 3, endDay: 11 },
    { sign: 'Pisces', startMonth: 3, startDay: 12, endMonth: 4, endDay: 18 },
    { sign: 'Aries', startMonth: 4, startDay: 18, endMonth: 5, endDay: 13 },
    { sign: 'Taurus', startMonth: 5, startDay: 13, endMonth: 6, endDay: 21 },
    { sign: 'Gemini', startMonth: 6, startDay: 21, endMonth: 7, endDay: 20 },
    { sign: 'Cancer', startMonth: 7, startDay: 20, endMonth: 8, endDay: 10 },
    { sign: 'Leo', startMonth: 8, startDay: 10, endMonth: 9, endDay: 16 },
    { sign: 'Virgo', startMonth: 9, startDay: 16, endMonth: 10, endDay: 30 },
    { sign: 'Libra', startMonth: 10, startDay: 30, endMonth: 11, endDay: 23 },
    { sign: 'Scorpius', startMonth: 11, startDay: 23, endMonth: 11, endDay: 29 },
    { sign: 'Ophiuchus', startMonth: 11, startDay: 29, endMonth: 12, endDay: 17 },
    { sign: 'Sagittarius', startMonth: 12, startDay: 18, endMonth: 1, endDay: 18 }
];

export function getAstronomicalSign(date: DateTime): string {
    const month: number = date.month
    const day: number = date.day

    for (const period of astronomicalDates) {
        // Handle year wrap-around for Sagittarius to Capricorn
        if (period.startMonth > period.endMonth) {
            if (
                (month === period.startMonth && day >= period.startDay) || 
                (month === period.endMonth && day <= period.endDay) ||
                (month > period.startMonth && month < 13) ||
                (month < period.endMonth && month > 0)
            ) {
                return period.sign
            }
            continue
        }

        // Handle same-month signs (like Scorpius and Ophiuchus in November)
        if (period.startMonth === period.endMonth) {
            if (
                month === period.startMonth && 
                day >= period.startDay && 
                day <= period.endDay
            ) {
                return period.sign
            }
            continue
        }

        // Handle all other signs
        if (
            (month === period.startMonth && day >= period.startDay) ||
            (month === period.endMonth && day <= period.endDay) ||
            (month > period.startMonth && month < period.endMonth)
        ) {
            return period.sign
        }
    }

    return 'Unknown'
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

export interface SignComparison {
    astrological: string;
    astronomical: string;
    explanation: string;
}

export function getComparison(astrological: string, astronomical: string): string {
    if (astrological === astronomical) {
        return `Your astrological and astronomical signs match! You were born when the Sun was actually in the constellation of ${astronomical}.`;
    }

    return `While you're traditionally considered a ${astrological}, astronomically the Sun was actually in the constellation of ${astronomical} when you were born. This difference is due to the precession of Earth's axis over thousands of years since the traditional zodiac was established.`;
};

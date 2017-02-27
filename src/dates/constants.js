const MONTH = 'month';
const HOUR = 'hour';
const ZONE = 'zone';
const WEEKDAY = 'weekday';
const QUARTER = 'quarter';

const DATE_FIELD_MAP = {
    'y': 'year',
    'M': MONTH,
    'L': MONTH,
    'd': 'day',
    'E': 'weekday',
    'h': HOUR,
    'H': HOUR,
    'm': 'minute',
    's': 'second',
    'a': 'dayPeriod',
    'x': ZONE,
    'X': ZONE,
    'z': ZONE,
    'Z': ZONE,
    'G': 'era',
    'c': WEEKDAY,
    'e': WEEKDAY,
    'q': QUARTER,
    'Q': QUARTER
};

const dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;

export { dateFormatRegExp, DATE_FIELD_MAP };
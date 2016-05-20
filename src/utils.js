const formatRegExp = /\{(\d+)}/g;

export function formatString(format) {
    const values = arguments;

    return format.replace(formatRegExp, (match, index) => {
        const value = values[parseInt(index, 10) + 1];

        return value;
    });
}

export function round(value, precision) {
    let result = value;
    let decimals = precision || 0;

    result = result.toString().split('e');
    result = Math.round(Number(result[0] + 'e' + (result[1] ? (Number(result[1]) + decimals) : decimals)));

    result = result.toString().split('e');
    result = Number(result[0] + 'e' + (result[1] ? (Number(result[1]) - decimals) : -decimals));

    return result.toFixed(decimals);
}

export function pad(number, digits = 2, right = false) {
    const count = digits - String(number).length;
    let result = number;

    if (count > 0) {
        const padString = new Array(count + 1).join("0");
        result = right ? number + padString : padString + number;
    }

    return result;
}
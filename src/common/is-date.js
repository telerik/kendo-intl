const objectToString = {}.toString;
const DATE_STRING = "[object Date]";

export default function isDate(value) {
    return objectToString.call(value) === DATE_STRING;
}
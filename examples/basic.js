import { parseNumber, formatNumber } from './../src/numbers';
import { parseDate, formatDate } from './../src/dates';
import { load } from './../src/cldr';

const numbers = require("cldr-data/main/bg/numbers.json");      
const timeZoneNames = require("cldr-data/main/bg/timeZoneNames.json");
const calendar = require("cldr-data/main/bg/ca-gregorian.json");
const currencies = require("cldr-data/main/bg/currencies.json");
const weekData = require("cldr-data/supplemental/weekData.json");
const currencyData = require("cldr-data/supplemental/currencyData.json");

load(numbers, currencies, timeZoneNames, calendar, weekData, currencyData);

let result = document.getElementById('result');

const formattedDate = formatDate(new Date(), "y MMMM EEEE dd hh:mm:ss.SSS a zzz G", "bg");

const parsedDate = parseDate("2000/ф вторник 1 11:11:11.000545 сл.об. -03:30 сл.Хр.", "yyyy/MMMMM EEEE d hh:mm:ss.SSSSSS a ZZZZZ G", "bg");

console.log(parsedDate);

result.innerHTML = formatNumber(11.1, "##,#.#%", "bg") + "<br />" + formattedDate;
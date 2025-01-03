import { cldr } from '../src/main';

const fs = require('fs');
const path = require('path');
const defaultDataClone = clone(cldr);

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function clean() {
    for (let field in cldr) {
        delete cldr[field];
    }
    Object.assign(cldr, clone(defaultDataClone));
}

export const LOCALES =
    fs.readdirSync(path.join('./node_modules', 'cldr-localenames-full', 'main'))
        .filter(locale => locale !== 'root');

export const NO_CURRENCY_LOCALE = 'es-419';

import { cldr } from '../src/main';
import availableLocales from 'cldr-data/availableLocales.json';

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

const EXCLUDE = {
    root: true,
    'en-US-POSIX': true
};

const ALIASES = {
    'ca-ES-VALENCIA': 'ca-ES-valencia'
};

export const LOCALES =
    availableLocales.availableLocales
        .filter(locale => EXCLUDE[locale] !== true)
        .map(locale => {
            return ALIASES[locale] || locale;
        });

export const NO_CURRENCY_LOCALE = 'es-419';

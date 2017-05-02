import { cldr } from './info';

export default function setData(data) {
    for (let locale in data) {
        const localeData = data[locale];
        const info = cldr[locale] = cldr[locale] || {};
        if (localeData.likelySubtags) {
            const supplemental = cldr.supplemental = cldr.supplemental || {};
            supplemental.likelySubtags = Object.assign(supplemental.likelySubtags || {}, localeData.likelySubtags);
        }

        const numbers = info.numbers;

        Object.assign(info, localeData);

        if (numbers && localeData.numbers) {
            info.numbers = Object.assign({}, numbers, localeData.numbers);
        }
    }
}
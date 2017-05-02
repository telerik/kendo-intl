import { cldr } from './info';

export default function setData(data) {
    const locale = data.name;
    const info = cldr[locale] = cldr[locale] || {};
    if (data.likelySubtags) {
        const supplemental = cldr.supplemental = cldr.supplemental || {};
        supplemental.likelySubtags = Object.assign(supplemental.likelySubtags || {}, data.likelySubtags);
    }

    const numbers = info.numbers;

    Object.assign(info, data);

    if (numbers && data.numbers) {
        info.numbers = Object.assign({}, numbers, data.numbers);
    }
}
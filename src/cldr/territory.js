import { cldr } from './info';

function territoryFromName(name) {
    const parts = name.split("-");
    const length = parts.length;

    if (length > 1) {
        const territory = parts[ length - 1 ];
        return territory.toUpperCase();
    }
}

export default function localeTerritory(info) {
    if (info.territory) {
        return info.territory;
    }

    const likelySubtags = cldr.supplemental.likelySubtags;
    const name = info.name;
    let territory;

    if (info.identity && info.identity.territory) {
        territory = info.identity.territory;
    } else if (likelySubtags && likelySubtags[name]) {
        territory = territoryFromName(likelySubtags[name]);
    } else {
        territory = territoryFromName(name);
    }
    info.territory = territory;

    return territory;
}
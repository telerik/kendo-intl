import { currencyDisplay, localeCurrency } from '../cldr';

export default function formatCurrencySymbol(info, options = {}) {
    if (!options.currency) {
        options.currency = localeCurrency(info);
    }

    const display = currencyDisplay(info, options);

    return display;
}

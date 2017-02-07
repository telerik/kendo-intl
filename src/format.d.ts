/**
 * Formats dates and numbers based on the specified format and locale.
 *
 * @param value The value to be formatted.
 * @param format A string representing a predefined or custom date or number format, or a configuration object.
 * @param locale The optional locale id. If not specified, the `"en"` locale id is used.
 * @returns The formatted value.
 */
export function toString(value: string | Date | number, format: string | any, locale?: string): string;

/**
 * Replaces the format string placeholders with the provided values based on the index.
 *
 * @param format The format string.
 * @param values The values that should be replaced in the format string.
 * @param locale The optional locale id. If not specified, the `"en"` locale id is used.
 * @returns The format string with replaced formatted values.
 */
export function format(format: string, values: any[], locale?: string): string;

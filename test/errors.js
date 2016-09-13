import { formatError } from '../src/errors';

describe('errors formatter', () => {
    it('should output error code plus message', () => {
        const error = {
            code: "001",
            message: "Big error!"
        };

        const result = "Error 001: Big error1";

        expect(formatError(error), result);
    });

    it('should replace single placeholder in the message', () => {
        const error = {
            code: "001",
            message: "Big error! ${0}"
        };

        const result = "Error 001: Big error1! placeholder";

        expect(formatError(error, "placeholder"), result);
    });
});

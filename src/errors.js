import errorsList from './errors-list';

const formatRegExp = /\{(\d+)}?\}/g;

class IntlError {
    _error = null;

    constructor(error) {
        if (!error) {
            throw new Error("{ code: string, message: string } object is required!");
        }

        this._error = error;
    }

    getMessage(...values) {
        const formattedMessage = this._error.message.replace(formatRegExp, function(match, index) {
            return values[parseInt(index, 10)];
        });

        return `${this._error.name}: ${formattedMessage}`;
    }

    setMessage(message) {
        this._error.message = message;
    }
}

const predicate = function(prev, current) {
    prev[current.name] = new IntlError(current);
    return prev;
};

const errors = errorsList.reduce(predicate, {});

export {
    errors,
    IntlError
};

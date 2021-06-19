import { isEqual, isNaN, isEmpty, isDate, get, groupBy, keys, orderBy } from "lodash";

const isTwoValueEqual = (value, other) => isEqual(value, other);

/**
 * The method extends the `_.isEmpty()` functionality by checking additional
 * "emptiness" of a given value.
 * A value is considered non-empty if it is:
 * - a number
 * - a boolean
 * - a date (checked using `_.isDate()`)
 */
const isValueEmpty = (data) => {
    // is a valid number?
    if (typeof data === "number" && !isNaN(data)) {
        return false;
    }
    // is a boolean?
    if (typeof data === "boolean") {
        return false;
    }
    // is a date?
    if (isDate(data)) {
        return false;
    }
    return isEmpty(data);
};

const getValueByPath = (object, path, defaultValue = null) => get(object, path, defaultValue);

const groupDataByKey = (object, key) => groupBy(object, key);

const getObjectKeys = (object) => keys(object);

const orderObjectByKey = (object, key) => orderBy(object, key);

export { isTwoValueEqual, isValueEmpty, getValueByPath, groupDataByKey, getObjectKeys, orderObjectByKey };

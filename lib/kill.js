 /**
 * kill value, default: kill undefined, null, NaN ''
 * format: String, default: ''
 * arr: Array, value list for kill
 */
function kill(value, format, arr) {
    if (format == undefined) {
        format = '';
    }
    // undefine, null, NaN
    if (!value && value !== 0) {
        return format;
    }

    if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                return format;
            }
            if (isNaN(value) && isNaN(arr[i])) {
                return format;
            }
        }
    }

    return value;
}

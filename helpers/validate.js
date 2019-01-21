exports.requiredFields = function(obj, fieldsArr) {
    for (const key of fieldsArr) {
        if (!obj[key] && obj[key] !== false) {
            return {isValid: false, missingKey: key};
        }
    }

    return {isValid: true, value: obj};
}
const fs = require("fs");

/**
 * Create a data file.
 */
exports.create = async function(file) {
    return new Promise((resolve, reject) => {
        fs.access(file, fs.constants.F_OK, (err) => {
            return err ? reject(err) : resolve();
        });
    });
}

/**
 * Read a data file.
 */
exports.read = function() {

}

/**
 * Update a file.
 */
exports.update = function() {

}

/**
 * Delete a file.
 */
exports.delete = function() {

}
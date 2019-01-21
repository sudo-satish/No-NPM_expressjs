exports.createToken = function(user) {
    return `token_${Date.now()}`;
}
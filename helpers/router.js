var router = {};
router.pathMapping = {};

router.get = function (path, handler) {
    if (!this.pathMapping[path]) {
        this.pathMapping[path] = { get: handler };
    } else {
        this.pathMapping[path].get = handler;
    }
}

router.post = function (path, handler) {
    if (!this.pathMapping[path]) {
        this.pathMapping[path] = { post: handler };
    } else {
        this.pathMapping[path].post = handler;
    }
}

router.put = function (path, handler) {
    if (!this.pathMapping[path]) {
        this.pathMapping[path] = { put: handler };
    } else {
        this.pathMapping[path].put = handler;
    }
}

router.delete = function (path, handler) {
    if (!this.pathMapping[path]) {
        this.pathMapping[path] = { delete: handler };
    } else {
        this.pathMapping[path].delete = handler;
    }
}

module.exports = router;
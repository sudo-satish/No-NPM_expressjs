exports.bindRequestHelper = function(req, res) {
    
    res.send = function(data) {
        this.write(JSON.stringify(data));
        this.end();
        return this;
    }

    res.status = function(code) {
        this.statusCode = code;
        return this;
    }

    res.json = function(data) {
        this.setHeader('Content-Type', 'application/json');
        this.write(JSON.stringify(data));
        this.end();
        return this;
    }
}
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
const { bindRequestHelper } = require("../helpers/requestHelper");
const url = require("url");

exports.index = function(req, res) {

    // Bind helper functions == 

    let parsedUrl = url.parse(req.url, true);
    let path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
    req.query = parsedUrl.query;
    req.path = path;

    bindRequestHelper(req, res);

    let method = req.method;

    let data = '';
    req.on("data",(chunk) => {
        data += decoder.write(chunk);
    });

    req.on('end', (chunk) => {

        data += decoder.end(chunk);
        // console.log(decoder.write(chunk));
        try {
            data = JSON.parse(data);
            // make body object
            req.body = data;

            if(!this.router) {
                throw new Error("Please use server.setRouter(router);");
            } else {
                this.router(req, res);
            }
        } catch (error) {
            console.error(error);
            
            res.status(400).json({message: error.message});
        }
    });
    // decide handler
}

exports.setRouter = function(router) {
    this.router = router;
}



const router = require('../helpers/router');
const { createToken } = require("../helpers/crypt");
const { requiredFields } = require("../helpers/validate");

/**
 * Router defination goes here
 */

 /**
  * Create user
  * Field : name, email address, street address and password.
  */
 router.post('account/user', (req, res) => {
    let userId = Date.now();
    let user = req.body;
     let validateUser = requiredFields(user, ['name', 'email', 'password', 'address']);
     if (!validateUser.isValid) {   
         res.status(400).json({ message: `Missing key ${validateUser.missingKey}`});
         return;
    }

    user.token = createToken(user);
    res.json(user);
 });

router.get('account/user', (req, res) => {
    res.send("Satish");
});


module.exports = function (req, res) {

    if(!router['pathMapping'][req.path]) {
        res.status(404).json({message: "No router defined. Please use account/user ->  for localhost/account/user route"});
        return;
    }
    
    if (!router['pathMapping'][req.path][req.method.toLowerCase()]) {
        res.status(404).json({message: "Method not allowed!"});
        return;
    }

    router['pathMapping'][req.path][req.method.toLowerCase()](req, res);
}
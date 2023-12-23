const jwt = require('jsonwebtoken');

function fetchUser(req, res, next) {
    //get user from jwt token and add id to req object
    const token = req.header('auth-token');

    if (!token) {
        res.status(401).send({ error: "Invalid Token" });
    }
    try{
    const data = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = data.user;
    next();
    }catch(err){
        res.status(401).send({ error: "Invalid Token" });
    }
}

module.exports = fetchUser;
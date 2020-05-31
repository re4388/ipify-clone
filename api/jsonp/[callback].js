const requestIp = require('request-ip');

module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.status(200).send(`${req.query.callback}({"ip": "${requestIp.getClientIp(req)}"})`);
}

/* If we name a file in our api directory with square brackets, like [parameter].js,
Vercel will allow any request like api/anything or api/somethingelse
and call that [parameter].js function with the value as a parameter in the request object. */
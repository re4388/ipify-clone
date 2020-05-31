/* We want to do three things for this endpoint:

1. Set the HTTP status to 200 (OK)
2. Set the Content-Type header to text/plain to tell everyone this is a plaintext response
3. Get the IP out of the request and set it as the only body of our response */


const requestIp = require('request-ip')

module.exports = (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200)
        .send(requestIp.getClientIp(req));
}


/* Note
The way Vercel works is we need to set module.exports to an arrow function,
that accepts two objects: the request and the response; (req, res) => { ... }.
This will be the same for all of our serverless functions. */
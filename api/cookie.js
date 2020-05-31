const { serialize } = require('cookie')

module.exports = (req, res) => {
    const cookie = serialize('hello', 'world', { httpOnly: true, expires: new Date('2020-12-01') })
    res.setHeader('Set-Cookie', [cookie]);
    res.end('It worked, check your cookies in devtools');
}

//https://stackoverflow.com/questions/61978530/vercel-serverless-functions-send-response-cookie
import express from 'express'
import canonize from './canonize'
import getShortFullName from './task2B'

const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/task2B', (req, res) => {
    let result = getShortFullName(req.query.fullname);
    console.log(req.query.fullname);
    console.log(result);
    res.send(result);
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

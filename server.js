const express = require('express');

const route = require('./controller');

const cors = require('cors');

const port = parseInt(process.env.PORT) || 3019;

const app = express();

const {errorHandling} = require('./middleware/ErrorHandling.js');

const cookieParser = require('cookie-parser');

app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', 'https://nostalgic-nodejs-eomp.web.app')
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
});
app.use(route);
app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({extended: false})
)

app.listen(port, ()=> {
    console.log(`Server is running`)
});

app.use(errorHandling);
const connect = require('connect');

const acc = require('accounting');

const url = require('url');

const app = connect();

function calcAdd(req, res, next) {
    //get the full
    const queryString = url.parse(req.url, true).query;
    
    const { x,y } = queryString;

    //calculate
    const total = parseFloat(x) + parseFloat(y);

    //display
    res.end(`
        ${x}+${y} = ${total}
    `);
}

function calcSub(req, res, next) {
    //get the full
    const queryString = url.parse(req.url, true).query;
    
    const { x,y } = queryString;

    //calculate
    const sub = parseFloat(x) - parseFloat(y);

    //display
    res.end(`
        ${x}-${y} = ${sub}
    `);
}

function calcMultiply(req, res, next) {
    //get the full
    const queryString = url.parse(req.url, true).query;
    
    const { x,y } = queryString;

    //calculate
    const multi = parseFloat(x) * parseFloat(y);

    //display
    res.end(`
        ${x}*${y} = ${multi}
    `);
}

function calcDivide(req, res, next) {
    //get the full
    const queryString = url.parse(req.url, true).query;
    
    const { x,y } = queryString;

    //calculate
    const div = parseFloat(x) / parseFloat(y);

    //display
    res.end(`
        ${x}/${y} = ${div}
    `);
}

function error(req, res, next) {

    const queryString = req.url.split('?')[0];
    //display
    res.end(`
        You entered in invalid method ${queryString}
    `);
}

app.use('/add', calcAdd);
app.use('/subtract', calcSub);
app.use('/multiply', calcMultiply);
app.use('/divide', calcDivide);
app.use('/', error);
app.listen(3000);
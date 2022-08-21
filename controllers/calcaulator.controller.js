
var Calcaulator = require('../classes/calcaulator.class');
var calcaulatorService = require('../services/calculate.service');

exports.calculate = async (req, res) => {
    const { number1, number2, operator } = req.query;
    let calcaulator = new Calcaulator(parseInt(number1),parseInt(number2),operator);
    const result = calcaulator.getResult();
    console.log(calcaulator)
    return res.status(200).send({result:result});
}


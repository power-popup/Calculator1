
var Calcaulator = require('../classes/calcaulator.class');
var calcaulatorService = require('../services/calculate.service');

exports.calculate = async (req, res) => {
    const { number1, number2, operator } = req.query;
    // So when calculator object is created and initialized i can only calculate particular numbers ?
    let calcaulator = new Calcaulator(parseInt(number1),parseInt(number2),operator);
    const result = calcaulator.getResult();
    console.log(calcaulator)
    return res.status(200).send({result:result});
}


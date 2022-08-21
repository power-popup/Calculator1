
var calcaulatorService = require('../services/calculate.service');

class Calcaulator{

    constructor(number1, number2,operator){
        this.number1 = number1;
        this.number2 = number2;
        this.operator = operator;
    }

    getResult(){
        this.result = calcaulatorService.OPERATIONS[this.operator](this.number1, this.number2)
        return this.result;
    }
}

module.exports = Calcaulator

var calcaulatorService = require('../services/calculate.service');

// *****************************************
// Calculator class - init 2 numbers and operator and claculate them.
// *****************************************

class Calcaulator{

    constructor(number1, number2,operator){
        this.number1 = number1;
        this.number2 = number2;
        this.operator = operator;
    }

    //this function access specific oprator in dictyonary items.
    //and invoke the specific method `addition`,`subtraction`
    getResult(){
        this.result = calcaulatorService.OPERATIONS[this.operator](this.number1, this.number2)
        return this.result;
    }
}

module.exports = Calcaulator
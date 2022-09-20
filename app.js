const calculator ={
    plus: function(a,b){
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    },
    times: function(a,b){
        return a * b;
    },
    divide: function(a,b){
        return a / b;
    },
    powerOf: function(a,b){
        return a ** b;
    }
};

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10);
const timeResult = calculator.times(10,minusResult);
const divResult = calculator.divide(timeResult, plusResult);
const powResult = calculator.powerOf(divResult, minusResult);
console.log(plusResult,minusResult,timeResult,divResult,powResult);
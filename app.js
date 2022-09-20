const calculator ={
    plus: function(a,b){
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    },
    divide: function(a,b){
        console.log(a/b);
    },
    powerOf: function(a,b){
        console.log(a**b);
    }
};

console.log(calculator.plus(5,2));
console.log(calculator.minus(5,2));
calculator.divide(4,2);
calculator.powerOf(5,3);
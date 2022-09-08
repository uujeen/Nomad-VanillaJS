// function is like Method in JAVA, argument is simillar with parameter in JAVA
// function function's name(argument1, 2, ……){
//      ……        
// }
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " And I'm " + age);
}
// *IMPORTANT* you should write "()" this, It's such a button to play to function
sayHello("Eugene", 26);
sayHello("Nico", 32);

function plus(firstNumber, secondNumber){ // firstNumber, secondNumber is only exist "HERE", "function plus"
    console.log(firstNumber + secondNumber);
}
// If you didn't to put in arguments in function to need arguments, It still can run, but there is a log such as "undefined, NaN(Not a Number"
plus(5, 10);

function devide(firstNumber, secondNumber){ // and also this firstNumber, secondNumber is only exist "HERE", but this is different with firstNumber, secondNumber in function plus
    console.log(firstNumber / secondNumber);
}
devide(10,5);

// our goal is make function like console.log() to player.sayHello()
const player = {
    name : "Eugene",
    age : 26,
    married : false,
    sayHello : function(nameOfPerson){
        console.log("Hello! " + nameOfPerson + " nice to meet you!");
    }
}

player.sayHello("Eugene");
player.sayHello("Nico");
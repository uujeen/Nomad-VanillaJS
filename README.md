# JS

>## console.log

Like a function `print`

>## const, let, var

`const` can't be changed, `let` can be change, also you can use `var`, but nowadays we don't. Cuz `(hoisting)` we can't check it would be changed or not, if use var.
<br> * Hoisting, It's feature of JS. wherever declartion of variable is, It's read first than code.

>## true or false, null, undefined

`true` means 1 , `false` means 0 and `null` means variable has nothing. `undefined` create memory of variable in computer, but variable has nothing and undefined "value".

>## Array
Now you don't need to write one by one variable.
<br> You can use `array` to create a bundle of same variable
```JS
const arrayName = [variable1, variable2, ……]；
```
Array.push() is input to array variable, and this is for example.
```JS
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", null, true, false, undefined];

console.log(daysOfWeek[4]);

daysOfWeek.push("sun");
```

>## Obejct

`Object` is different compared with array, array has same values, but Objects have different properties.
<br>For example, if we make array named "daysOfWeek", array has days, but Objects named player, have different properties.
<br>`Object` allows us to save data that has some properties.
```JS
const ObjectName = {
    stringExample : "exam"，
    NumberExample : 1，
    ……
}
```
For exmaple,
```JS
const player = {
    name: "Eugene",
    points: 10,
    fat: false,
};
```
Also, you can change "value" of properties in `Object`, and create properties.
```JS
console.log(player.points);
player.points = 20;
console.log(player.points);
player.lastName = "Kang"; 
player.point = player.points + 10;
```

>## Function

```JS
function funcName(argument1, argument2,……) {
    ……
}
```
Functions is like Method and argument is simillar parameter in JAVA.
Also, It can be written there is without arguments
<br>Our goal in this chapter is making a form like `console.log()` to `player.sayHello()`
```JS
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
```


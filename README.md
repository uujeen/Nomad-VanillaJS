# JS

## console.log

Like a function `print`

## const, let, var

`const` can't be changed, `let` can be change, also you can use `var`, but nowadays we don't. Cuz we can't check it would be changed or not, if use var.

## true or false, null, undefined

`true` means 1 , `false` means 0 and `null` means variable has nothing. `undefined` create memory of variable in computer, but variable has nothing and undefined "value"

## array
```
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", null, true, false, undefined];

// Get Item from Array, index start from 0 not 1
// if you want to get index of 5
console.log(daysOfWeek[4]);

// Add one more Item to Array
daysOfWeek.push("sun");
```

## Obejct

`Object` is different compared with array, array has same values, but Objects have different properties.
<br>For example, if we make array named "daysOfWeek", array has days, but Objects named player, have different properties.
<br>`Objects` allow us to save data that has some properties 
```
const player = {
    name: "Eugene",
    points: 10,
    fat: false,
};
```
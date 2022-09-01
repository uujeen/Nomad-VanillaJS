const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", null, true, false, undefined];
console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[4]); // index start from 0 not 1

// Add one more Item to Array
daysOfWeek.push("sun");

console.log(daysOfWeek);
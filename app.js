// Object difference compared with array, array has same values, but Objects have different properties.
// For example, if we make array named "daysOfWeek", array has days, but Objects named player, have different properties.
// Objects allow us to save data that has some properties 
const player = {
    name: "Eugene",
    points: 10,
    fat: false,
};

console.log(player);

// We can figure out that console.log means console is Object and has "log".
console.log(player.name) // = console.log(player["name"]);

player.fat = false;
console.log(player);
player.lastName = "Kang";
console.log(player);
player.points = player.points + 15; 
console.log(player)
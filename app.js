const age = parseInt(prompt("How old are you?"));


console.log(age, typeof age);

console.log(isNaN(age));
if(isNaN(age) || age<0){
    console.log("please write Number or positive Number");
}
else if(age < 18){
    console.log("You are too young.");
}
else if(18<= age && age <= 50){
    console.log("You can drink.");
}
else {
    console.log("You are too old");
}
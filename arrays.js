let cars = ["supra", "gtr", "mustag"]
console.log(cars);
console.log(cars.length);
cars[4] = "posche";
console.log(cars);

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2));
console.log(array1.indexOf('c'));


var teams = ["united", "city", "madrid", "dortmund"]
teams.push("bayen");//add at the end
console.log(teams);

teams.unshift("newcastel"); //add at the start of the array
console.log(teams);

var deleted = teams.pop();//pop the last element
console.log(deleted);
console.log(teams);

teams.shift();//pop he first element
console.log(teams);//['united', 'city', 'madrid', 'dortmund']


if (teams.indexOf("united") == 1) {
    console.log("YES")
}
else {
    teams.splice(1, 0, "barca");//splice(start,delete,element to be added)
}

console.log(teams);

const players = ["ronaldo", "messi", "neymar"]

for (let player of players) {
    console.log(player);
}
console.log(players[1]);
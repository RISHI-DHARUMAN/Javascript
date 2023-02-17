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
onst animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.splice(1, 2, "bull"); //delets
console.log(animals);

const animal = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const new_array = animal.slice(2, 4);//displays
console.log(new_array);

const data = ("ronaldo, messi, neymar")
let new_data = data.split(".");// convert string to array
console.log(new_data);

let num;
num = 10;
console.log(num);

num = ["1", "4", "3", "2", "100"]
var new_ = num.toString();//convert string to array
console.log(new_);
console.log("rishi");


num.sort();
console.log(num);

var number = [2, 3, 4, 5, 3];
var even = number.filter(n => (n % 2 === 0));//filter
console.log(even);

var double = number.map(n => n * 2);//map
console.log(double);

var highest = number.reduce((p, n) => p > n ? p : n);//reduce
console.log(highest);

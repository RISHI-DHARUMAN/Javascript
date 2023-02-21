//object

let person =
{
    name: "rishi",
    intrest: [`football,webseries`],
    address:{
        city:"ooty",
        district:"THE nilgiris",
    },
    greeting() {
        console.log(`my name is ${this.name} my hobbies are ${this.intrest}`);

    }

};


person.greeting();
let person2 = Object.create(person);
person2.name= "sugu";
person2.greeting();


// dynamic object

let dynamic_ob =
{
    name: "rishi"
};
dynamic_ob.age = 21;
dynamic_ob.greeting = function ()
 {
    console.log("hii");
}

dynamic_ob.greeting();
console.log(dynamic_ob);

delete dynamic_ob.age;
console.log(dynamic_ob);

//reference data type

let cart =
{
    value: 5,
};

let cart1 = 5;

function update1(cart1) {
    cart1++;
}
update1(cart1);
console.log(cart1);


//class

class user{
    constructor(name,email){
        this.name= name;
        this.email= email;
        this.num=0;
    }
    login()
    {
        console.log(`Name ${this.name},Email ${this.email} has logged in `);
    }
    logout(id)
    {
        this.id = id;
        console.log(`${this.name} ID-${this.id} has logged out`)
    }
    logincount()
    {
        this.num++;
        console.log(`No of times logged in ${this.num}`)
    }

}

let user1= new user("Rishi","rishi@gmail.com");
user1.login();
user1.logout(45);
user1.logincount();
user1.logincount();
let user2= new user("yor","yor@gmail.com");
user2.logout();
user2.logincount();

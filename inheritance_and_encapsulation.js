
//inheritance
class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;

    }
    display() {
        console.log(`Name:${this.name} Salary:${this.salary}`);

    }
}

class Manager extends Employee {
    constructor(name, salary,experience) {
        super(name, salary);
        this.experience = experience;
        this.salary= salary;
    }
    display1() {
        console.log(`Experience: ${this.experience}`);
    }
}
const emp1 = new Employee("Rishi", "9000")
emp1.display();

const manager1 = new Manager("Rishi", "9000","29");
manager1.display();
manager1.display1();


//encapsulation
class Student {
    name;
    #year;

    constructor(name, year) {
        this.name = "sugu";
        this.#year = 2017;
    }


    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }

    year() {

        let num = this.#year;
        console.log(num);
    }

};

const summers = new Student();

summers.name = "rishi";
summers.introduceSelf();
summers.year(); 

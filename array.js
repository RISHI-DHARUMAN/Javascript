
        var array = [1, 2, 3, 4, 5];
        var array_2 = ['dinesh', 'balaji', 'gopi', 'gowtham', 'sridharan', 'senni'];
        console.log(array);//printing all the elements in the array
        console.log(array.length); //length of the array
        console.log(array_2[1]); // indexing element


        //updating 
        array_2[0] = 'kumar';
        console.log(array_2);
        console.log(array_2.indexOf('kumar')); //index of character
        array_2.push('sathur ganth'); // adding element in the last
        array_2.pop(); // removing element in last position
        array_2.shift(); // removing element in first position
        console.log(array_2);
        //accessing every element in the array


        for (var elements of array) {
            console.log(elements);
        }
        // map()
        function double(number) {
            return number * 3;
        }
        var numbers = [2, 4, 6, 8, 10];
        var twice = numbers.map(double);
        console.log(twice);
        //filter
        function long(companies) {
            return companies.length > 3;
        }
        const companies = ['aspire', 'tcs', 'cts', 'zoho', 'dell'];
        const filteration = companies.filter(long);
        console.log(filteration);

        //split()
        const text = "My name is Rishi D";
        const spliting = text.split(" ", 3); //my , name , dinesh
        document.getElementById("store").innerHTML = spliting;


        //join()
        console.log(companies.join('-'));
        //to string
        console.log(numbers.toString());
        //creating empty array
        const player = new Array(3);
        //Array.prototype.at()
        console.log(companies.at(-1)); // finding the last item
        //Array.prototype.concat()
        const number_1 = [1, 3, 5, 7, 9];
        const number_2 = [2, 4, 6, 8, 10];
        console.log(number_1.concat(number_2));  //merge two arrays
        //Array.prototype.copyWithin()
        console.log(number_1.copyWithin(0, 3));//7,9,5,7,9
        console.log(number_1.copyWithin(0, 3, 4));


        //Array.prototype.entries()
        const a = ["a", "b", "c"];
        const arrayEntries = a.entries();
        for (const element of arrayEntries) {
            console.log(element);
        }

        
        //Array.prototype.every()
        const check = [2, 4, 6, 8, 10]
        const every_ele = check.every(finding)
        console.log(every_ele);
        function finding(result) {
            return result >= 2;
        }


        //Array.prototype.fill()
        console.log(number_1.fill(5));
        console.log(number_1.fill(1, 3));


        //Array.prototype.find()
        const array_3 = [5, 1, 8, 130, 44];
        const found = array_3.find(element => element > 10);
        console.log(found);


        //Array.prototype.findIndex()
        const index = array_3.findIndex(element => element > 10);
        console.log(index);


        //Array.prototype.findLast()
        const array_4 = [5, 12, 50, 130, 44];
        const founds = array_4.findLast((element) => element > 45);
        console.log(founds);


        //Array.prototype.flat()
        const arr_1 = [0, 1, 2, [3, 4]];
        console.log(arr_1.flat());


        // Array.from()
        const string = "Rishi";
        console.log(Array.from(string));

        //Array.prototype.includes()
        console.log(arr_1.includes(2)); //checking whether the number is there or not
        console.log(arr_1.includes(0, 0));


        // array is array
        console.log(Array.isArray(arr_1));

        //Array.of()
        console.log(Array.of('Rishi', '1', 3, 4, 5));

        //reverse
        console.log([1, 2, 3, 4, 5].reverse());

        //slice
        console.log([1, 2, 3, 4, 5].slice(0, 3));

        //splice
        const arr_2 = ['mon', 'wednes', 'thur'];
        arr_2.splice(1, 0, 'tues')
        console.log(arr_2);
        
        //unshift
        const arr_3 = [4, 5, 6, 7, 8, 9, 10];
        arr_3.unshift(1, 2, 3);
        console.log(arr_3);

    
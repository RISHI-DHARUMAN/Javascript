const str_1 = "rishi";
//length of the string
console.log(str_1.length);

//String.prototype.at()
console.log(str_1.at(-1));
console.log(str_1.at(-5));
console.log(str_1.at(5));

//String.prototype.big()
console.log(str_1.big());
console.log(str_1.small());
console.log(str_1.fontsize(7));

//String.prototype.blink()
console.log(str_1.blink());
console.log(str_1.bold());
console.log(str_1.italics());

//String.prototype.charAt()
console.log(str_1.charAt(3));

//String.prototype.charCodeAt()
console.log(str_1.charCodeAt(0));
console.log("Rishi".charCodeAt(0));

//String.prototype.concat()
const str_2 = "Rishi";
const str_3 = "kumar ";
console.log(str_2.concat(" , ", str_3));

//String.prototype.endsWith() true or false
console.log(str_2.endsWith('i'));
console.log(str_3.endsWith('r'));

//String.prototype.fixed()
console.log(str_1.fixed());


//String.fromCharCode()
console.log(String.fromCharCode(72, 69, 76, 76, 79));


//String.prototype.includes()
console.log(str_1.includes(' '));
console.log(str_1.includes('d=r', 5));

//String.prototype.indexOf()
console.log(str_1.indexOf('r'));

//String.prototype.lastIndexOf()
console.log(str_1.lastIndexOf("k")); //7


//String.prototype.localeCompare()
str_4 = 'cb';
str_5 = 'ab';
console.log(str_4.localeCompare(str_5)); // -1 ,1 ,0


//String.prototype.match()
const str_6 = "rishi";
const str_7 = /[a-h]/g;
const result = str_6.match(str_7);
console.log(result);

//String.prototype.padEnd()
console.log('Rishi'.padEnd(10, ';'));
console.log('Rishi '.padEnd(12, 'kumarrrr...........'));

//String.prototype.padStart()
console.log('ish'.padStart(6, 'r'));

//String.prototype.repeat()
console.log('welcome '.repeat(3));

//String.prototype.replace()
console.log('rishi'.replace('i', 's'));

//String.prototype.replaceAll()
console.log('replace all'.replaceAll('a', 'b'));

//String.prototype.startsWith()
console.log('aspire'.startsWith('A'));

//String.prototype.substring()
console.log('Google'.substring(1, 2));
console.log('Google'.substring(1));

//String.prototype.toUpperCase()
console.log('rishi'.toUpperCase());

//String.prototype.toLpperCase()
console.log('rishi'.toLowerCase());

//String.prototype.trim()
console.log(' rishi   '.trim());

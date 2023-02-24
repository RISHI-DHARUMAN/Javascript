  const str_1 = "Rishi";
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
        console.log("Dinesh".charCodeAt(0));

        //String.prototype.concat()
        const str_2 = "Rishi";
        const str_3 = "kumar ";
        console.log(str_2.concat(" , ", str_3));

        //String.prototype.endsWith() true or false
        console.log(str_2.endsWith('i'));
        console.log(str_3.endsWith('r'));

        //String.prototype.fixed()
        console.log(str_1.fixed());

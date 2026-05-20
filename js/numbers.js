/* STEP 1: Number types (integer, float, and double)
        declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
        let para = document.querySelector('p');
        // Note - there are also different number systems: binary, octal, and hexadecimal
        let myInt = 10;
        let myFloat = 5.6789;
        let typeTest = console.log(typeof(myFloat));
        let binNum = 0b1010;//prefix=0b
        console.log('binary number: ' + binNum);
        let octalNum = 0o12;
        console.log('Octal number: ' + octalNum);
        let hexaNum = 0xF;
        console.log('Hexa number: ' + hexaNum);

        /* STEP 2: Arithmetic operators
        + (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */
        let step2a = 5 % 3;
        para.textContent = step2a;
        console.log(step2a);

        // Try declaring and initializing a couple of variables as numbers


        /* OR… num1 * num2 / 8 + 2 - 0.5; */

        /* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
        num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */
        
        /* If you want to avoid this precedence, use parenthesis
        (num1 + num2) * 5 - 25 */
        let step2b = (90 + 60) * 5 - 25;
        console.log(step2b);

        /* STEP 3: Increment and decrement operators
        ++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
        //postincrement: USE FIRST AND THEN INCREMENT
        let x = 5;
        let y = x++;
        console.log('y: ' + y);
        console.log('x :' + x);



        //preincrement:INCRESE FIRST AND THEN USE
        let a = 4;
        let b = ++a;
        console.log('b: ' + b);//4++ or ++4//Invalid


        // Note 1 - you cannot increment/decrement a number directly
        // Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

        /* STEP 4: Assignment Operators
        = (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
        let step4a = 5;
        console.log( step4a /= 2);
        //step4a = step4a /2;

        /* STEP 5: Comparison Operators
        ===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
        let c = 2;
        let d = '2';
        console.log( c== d);
          console.log( c=== d);
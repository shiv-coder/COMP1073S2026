let output = document.querySelector('p');
        
        /* STEP 1: String Length */
        let step1 = 'This is a string';
        output.textContent = step1.length;


        /* STEP 2: Retrieving a Specific String Character */
        let step2 = 'Donald J. Trump';
        let firstChar = step2[0];
        output.textContent = firstChar;
        output.textContent = step2.length;
        output.textContent = step2.length - 1;
        output.textContent = step2[step2.length -1];



        /* STEP 3: Extracting Part of a String */
        //indexOf(serachValue,startIndex-where to strat searching)
        let step3s = step2.indexOf("shi");
        output.textContent = step3s;

        let step3ss = step2.slice(10,13);
        output.textContent =  step3ss;

        // Note - if the substring is not found within the string, indexOf() returns -1

        // Note - if you don't specify where to end the slice, the method returns the rest of the string

        /* STEP 4: Changing Case */
        step4a = 'Bank of Canada';
        output.textContent = step4a.toUpperCase();


        /* STEP 5: Updating Parts of a String */
        let step5 = 'Barrie, ON';
        output.textContent = step5.replace('ON','Ontario');
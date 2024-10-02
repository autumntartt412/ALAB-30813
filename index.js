// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.



for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0)
        console.log("Fizz Buzz");

   else  if (i % 3 === 0)
        console.log("Fizz");


    else if (i % 5 === 0)
        console.log("Buzz");

    else
        console.log([i]);
}


// #2


let n = 3;
{ 
    
    if (n <= 1) return false; 
    if (n <= 3) return true; 
     
 
    if (n % 2 == 0 || n % 3 == 0) return false; 
     
    for (let i = 5; i<=n; i+2) 
        if (n % i == 0 || n % (i + 2) == 0) 
        return false; 
     
    console.log(n); 
}  


// #3



// Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. 
// You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. 
// While each of these programs save their data in different formats to preserve style (e.g., font color 
// or cell backgrounds), at their core, they are storing CSV data.

// Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:

// ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26
// CSV data looks like this:

// let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";



let file = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let rows = file.split('\n');



for (let i = 0; i < rows.length; i++); {

    let row = rows[i].split(',');


cell1 = row([0]);
cell1 = row([1]);
cell1 = row([2]);
cell1 = row([3]);

console.log(cell1, cell2, cell3, cell4);

}
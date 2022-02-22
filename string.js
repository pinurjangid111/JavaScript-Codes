// let name="Krishna";

// let name2=`Hello\n ${name}`;
// console.log(name2);
// document.write(name2.length);


// let str1="krishna";
// let str2="Jangid";
// console.log(str1 +" "+str2);


// substr      ------------------------------------------(particular character search)

// let str1= "This is Krishna Jangid from Graphic Era Hill University Dehradun";
// document.write(str1.substr(8,15));


// substring     ---------------------------------------(particular location fetch)

// let str1= "This is Krishna Jangid from Graphic Era Hill University Dehradun";
// document.write(str1.substring(8,15));



// position finding and skipping ----------------------------------------------

// let str1= "This is Krishna Jangid from Graphic Era Hill University Dehradun";
// document.write(str1.indexOf("is",6));



// position finding from last and skipping ----------------------------------------------


// let str1= "This is Krishna Jangid from Graphic Era Hill University Dehradun";
// document.write(str1.lastIndexOf("is",6));

// Remove extra spaces in string --------------------------------------------------------

// let str1= "   This is Krishna Jangid from Graphic   Era Hill University Dehradun"  ;
// console.log(str1.trim());
// console.log(str1.trimStart());
// console.log(str1.trimEnd());


// upper----------

// let str= "   This is Krishna Jangid from Graphic   Era Hill University Dehradun"  ;
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// replace a word in string-----------------


// let str= "This is Krishna Jangid from Graphic Era Hill University Dehradun"  ;
// console.log(str.replace('Hill','pahaad'));


//checking if this word is present in string ------------------------------------------


let str= "This is Krishna Jangid from Graphic Era Hill University Dehradun"  ;
console.log(str.includes('from'));
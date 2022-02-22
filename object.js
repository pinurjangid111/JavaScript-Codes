let person={
    firstname:'krishna',
    lastname:'Jangid'
};
person.age=23;
person.College= "Graphic Era Hill University";
delete person.firstname;
document.write(person['College'],"<br>",person['age']);
//document.write("<br>",person['firstname']," ");  //Array format----
document.write(person.lastname);          //noraml format----
console.log(person['College'],"\n",person['age']);
//console.log(person['firstname']," ");  //Array format----
console.log(person.lastname);          //noraml format----
console.log('age' in person);          

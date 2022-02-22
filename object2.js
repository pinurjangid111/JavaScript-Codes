let person={
    Firstname:'krishna',
    Lastname:'Jangid'
};
person.Age=23;
for(let key in person){
    document.write(key + " : "+person[key],'<br>');
}

 //using object in loop dot operator will not work always use array operator.
function Student(first,last,age,cls){
    this.firstName = first;
    this.lastName = last;
    this.age=age;
    this.class=cls;
}

let student1= new Student("Krishna ","Jangid",23,"MCA");
let student2= new Student("Sibbu ","Jangid",23,"MCA");
let student3= new Student("mitru ","Jangid",23,"MCA");
student1.Nationality = "INDIAN";
student2.Nationality = "INDIAN";
student3.Nationality = "INDIAN";
Student.prototype.Dharam="Hindu";
console.log(student1,student2,student3);
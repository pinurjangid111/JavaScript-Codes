function Student(first,last,age,cls)
{
    this.firstName = first;
    this.lastName = last;
    this.age=age;
    this.class=cls;
}
Student.prototype.Nationality = "INDIAN";
Student.prototype.Address="Rajeev Nagar";
Student.prototype.name=function()
{
    return this.firstName+" "+this.lastName;
}

let student1= new Student("Krishna ","Jangid",23,"MCA");
let student2= new Student("Sibbu ","Jangid",23,"MCA");
let student3= new Student("mitru ","Jangid",23,"MCA");

console.log(student1.name(),student2.name(),student3.name());    
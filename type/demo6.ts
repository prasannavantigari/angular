export class Employee{
    
   constructor(
    public firstName: String,
    public lastName: String,
    public salary: Number,
    public gender: String,
    public email: String){

}

getFullName(){
    console.log(this.firstName + " "+this.lastName+" "+this.salary+" "+this.gender+" "+this.email)
}

}

let emp = new Employee("prassu","lp", 25000, "female", "p@gmail.com");
emp.getFullName();

   

   

class Stud{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("student name from parent "+this.name);
    }
}
class Student1 extends Stud
{
    constructor(name,rollno)
    {
        super(name);
        this.rollno=rollno;
    }
    display1(){
        super.display();
        console.log("student name from child class "+this.name);

    }
}
let s=new Student1("akshara",1202);
s.display1();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class school {
    name;
    students = [];
    teachers = [];
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(techObj) {
        this.teachers.push(techObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolname) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolname;
    }
}
class Teacher extends Student {
    email = "";
    contact = "";
    addInfo(email, contact) {
        this.email = email;
        this.contact = contact;
    }
}
let school1 = new school("APS");
let school2 = new school("Educators");
let s1 = new Student("Haris", 28, school1.name);
let s2 = new Student("Khan", 28, school2.name);
let s3 = new Student("Moha", 28, school2.name);
let t1 = new Teacher("Haim", 38, school1.name);
let t2 = new Teacher("FH", 28, school2.name);
let t3 = new Teacher("MHK", 45, school2.name);
t1.addInfo("xyz@gmail.com", "54321");
t2.addInfo("qwe@outlook.com", "98765");
t3.addInfo("asd@live.com", '6543');
school1.addStudent(s1);
school2.addStudent(s2);
school2.addStudent(s3);
school1.addTeacher(t1);
school2.addTeacher(t2);
school2.addTeacher(t3);
// console.log(t1)
// console.log(t2)
// console.log(t3)
console.log(school1);
console.log(school2);

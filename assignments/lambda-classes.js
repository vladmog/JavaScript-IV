// // CODE here for your Lambda Classes
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person{
    constructor(obj1){
        this.name = obj1.name;
        this.age = obj1.age;
        this.location = obj1.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
 }
 
 // #### Instructor
 
 // * Now that we have a Person as our base class, we'll build our Instructor class.
 // * Instructor uses the same attributes that have been set up by Person
 // * Instructor has the following unique props:
 //   * `specialty` what the Instructor is good at i.e. 'redux'
 //   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
 //   * `catchPhrase` i.e. `Don't forget the homies`
 // * Instructor has the following methods:
 //   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
 //   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
 
 
 //==================STRETCH==============================
 // * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
 
 class Instructor extends Person{
     constructor(obj2){
         super(obj2);
         this.specialty = obj2.specialty;
         this.favLanguage = obj2.favLanguage;
         this.catchPhrase = obj2.catchPhrase;
     }
     demo(subject){
         console.log(`Today we are learning about ${subject}`);
     }
     grade(student, subject){
         console.log(`${student.name} receives a perfect score on ${subject}`);
     }
     changeGrade(student){
       console.log(`${student.name}'s grade is ${student.grade}%`);
       if(student.grade < 70){
         var increment = Math.floor(Math.random() * 100);
         student.grade += increment;
         console.log(`${this.name} increased ${student.name}'s grade by ${increment}%`);
         this.changeGrade(student);
       }else{
         console.log(`${student.grade}% is enough to graduate
         `);
         student.graduate();
       }
     }
 }
 
 // #### Student
 
 // * Now we need some students!
 // * Student uses the same attributes that have been set up by Person
 // * Student has the following unique props:
 //   * `previousBackground` i.e. what the Student used to do before Lambda School
 //   * `className` i.e. CS132
 //   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
 // * Student has the following methods:
 //   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
 //   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
 //   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
 
 //=================================================
 
 // #### Stretch Problem
 
 // * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
 // * Add a graduate method to a student.
 //   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
 //   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
 
 
 class Student extends Person{
     constructor(obj3){
         super(obj3);
         this.previousBackground = obj3.previousBackground;
         this.className = obj3.className;
         this.favSubjects = obj3.favSubjects;
         //     V V V stretch V V V
         this.grade = obj3.grade;
     }
     listsSubjects(){
         console.log(...this.favSubjects);
     }
     PRAssignment(subject){
         console.log(`${this.name} has submitted a PR for ${subject}`);
     }
     sprintChallenge(subject){
         console.log(`${this.name} has begun sprint challenge on ${subject}`)
     }
     graduate(student){
         if (this.grade <= 80){
           console.log(`${this.name} barely graduated with a C!`);
         }
         if (this.grade < 90 && this.grade > 80){
           console.log(`${this.name} graduated with a B, good job your mom must be proud!`);
         }
         if (this.grade >= 90 && this.grade <= 100){
           console.log(`${this.name} graduated with an A, what a stallion!`);
         }
         if (this.grade > 100){
           console.log(`${this.name} hacked the system, give him a job!`);
         }
     }
 }
 
 // #### Project Manager
 
 // * Now that we have instructors and students, we'd be nowhere without our PM's
 // * ProjectManagers are extensions of Instructors
 // * ProjectManagers have the following unique props:
 //   * `gradClassName`: i.e. CS1
 //   * `favInstructor`: i.e. Sean
 // * ProjectManagers have the following Methods:
 //   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
 //   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
 
 class ProjectManager extends Instructor{
     constructor(obj4){
         super(obj4);
         this.gradClassName = obj4.gradClassName;
         this.favInstructor = obj4.favInstructor;
         this.catchPhrase = obj4.catchPhrase;
     }
     standUp(channel){
         console.log(`${this.name} announces to ${channel}, @channel standy times!`);
     }
     debugsCode(student, subject){
         console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
     }
 }
 
 //const vlad = new Person("Vlad", 24, "los angeles");
 const vlad = new Person({
   name: "Vlad",
   age: 24,
   location: "Los Angeles"
 })
 
 const david = new Person({
   name: "David",
   age: 50,
   location: "Fontana"
 })
 
 
 const bob = new Student({
   name: "Bob",
   age: 33,
   location: "Detroit",
   previousBackground: "welding",
   className: "WEB100",
   favSubjects: ["Oxyacetylyne", "Submerged Arc", "GTAW"],
   grade: 30
 })
 
 const crex = new Student({
   name: "C-Rex",
   age: 21,
   location: "Nanoland",
   previousBackground: "Biting heads off",
   className: "WEB20",
   favSubjects: ["HTML", "CSS", "JAVASCRIPT"],
   grade: 20
 })
 
 
 
 const dan = new Instructor({
   name: "Dan",
   age: 30,
   location: "New York",
   specialty: "redux",
   favLanguage: "JavaScript",
   catchPhrase: "meow"
 })
 
 const josh = new Instructor({
   name: "Josh",
   age: 27,
   location: "Iowa",
   specialty: "teaching",
   favLanguage: "Cascading Style Sheets",
   catchPhrase: "YASSSSS"
 })
 
 const jamie = new ProjectManager({
   name: "Jamie",
   age: 25,
   location: "Brooklyn",
   specialty: "being awesome",
   favLanguage: "CSS",
   catchPhrase: "cool",
   gradClassName: "web17",
   favInstructor: "Josh Knell",
 })
 
 const adam = new ProjectManager({
   name: "Adam",
   age: 23,
   location: "Hollyweird",
   specialty: "blowing things up",
   favLanguage: "Exploding style sheets",
   catchPhrase: "BOOOOM!",
   gradClassName: "BOOM20",
   favInstructor: "Vladislav Mogilevskiy",
 })
 
 vlad.speak()
 dan.demo("HTML")
 dan.grade(bob, "Redux")
 bob.listsSubjects()
 bob.PRAssignment("CSS")
 bob.sprintChallenge("JS")
 jamie.standUp("WEB20")
 jamie.debugsCode(bob, "Crabbascript")
 
 console.log("==========================")
 
 david.speak()
 josh.demo("Hacking the government")
 josh.grade(bob, "hacking the dance floor")
 crex.listsSubjects()
 crex.PRAssignment("rof RP a dettimbus sah maS")
 crex.sprintChallenge("running from the PoPo")
 adam.standUp("the people who stand")
 adam.debugsCode(crex, "bugged code")
 
 console.log("==========================")
 
 jamie.changeGrade(bob)
 
 
 
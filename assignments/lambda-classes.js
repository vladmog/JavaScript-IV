// // CODE here for your Lambda Classes
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
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
 
 class Instructor extends Person{
     constructor(obj){
         super(obj);
         this.specialty = obj.specialty;
         this.favLanguage = obj.favLanguage;
         this.catchPhrase = obj.catchPhrase;
     }
     demo(subject){
         console.log(`Today we are learning about ${subject}`);
     }
     grade(student, subject){
         console.log(`${student.name} receives a perfect score on ${subject}`);
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
 
 class Student extends Person{
     constructor(obj){
         super(obj);
         this.previousBackground = obj.previousBackground;
         this.className = obj.className;
         this.favSubjects = obj.favSubjects;
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
     constructor(obj){
         super(obj);
         this.gradClassName = obj.gradClassName;
         this.favInstructor = obj.favInstructor;
         this.catchPhrase = obj.catchPhrase;
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
   favSubjects: ["Oxyacetylyne", "Submerged Arc", "GTAW"]
 })
 
 const sam = new Student({
   name: "C-Rex",
   age: 21,
   location: "Nanoland",
   previousBackground: "Biting heads off",
   className: "WEB20",
   favSubjects: ["HTML", "CSS", "JAVASCRIPT"]
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
 sam.listsSubjects()
 sam.PRAssignment("rof RP a dettimbus sah maS")
 sam.sprintChallenge("running from the PoPo")
 adam.standUp("the people who stand")
 adam.debugsCode(sam, "bugged code")
 
 
 
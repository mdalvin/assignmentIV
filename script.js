class Student {
    constructor({firstName, lastName, dateOfBirth, age, gender, studentID, hobbies}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
        this.studentID = studentID;
        this.hobbies = hobbies;
        
        switch (gender){
            case "male":
                this.gender = gender;
                break;
            case "female":
                this.gender = gender;
                break;
                default:
                this.gender = "unvalid";
        }
    }

    set fName(newFirstName){
        this.firstName = newFirstName;
    }

    set lName(newLastName){
        this.lastName = newLastName;
    }

    set fullName(fN){
        if(/[A-Za-z]\s[a-Za-z]/.test(fN)){
            [this.firstName, this.lastName] = fN.split(' ');
        }
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set dob(date){
        return this.dateOfBirth.push(date);
    }

    set myAge(newAge) {
        return this.age = newAge;
    }
        
    set id(newId) {
        return this.studentID.push(newId);
    }

    myhobby(newHobby){
        this.hobbies = newHobby;
    }

    hobbyList(){
        return this.hobbies;
    }

    removeHobby(newHobby) {
        let hobbiesArray = [];
    
        for (let i = 0; i < this.hobbies.length; i++) {
          if (this.hobbies[i] !== newHobby) {
            hobbiesArray.push(this.hobbies[i]);
          }
        }
        this.hobbies = hobbiesArray;
      }
    
    studentInfo(){
        return `Hi, I am ${this.fullName}. I am a ${this.gender}. I am ${this.age} years old. I was borned on ${this.dateOfBirth}. My student ID is ${this.studentID}. My hobbies are ${this.hobbies}.`
    }
}

let Joe = new Student ({
    firstName: "Joe",
    lastName: "Bastianich",
    dateOfBirth: "August 10, 2000",
    age: 20,
    gender: "male",
    studentID: "33445566",
    hobbies: ["fishing", "music", "soccer"]
})

let Tina = new Student ({
    firstName: "Tina",
    lastName: "Murdoch",
    dateOfBirth: "June 17, 2005",
    age: 15,
    gender: "female",
    studentID: "abdadkcl",
    hobbies: ["hiking", "cooking", "reading"]

})

console.log(Joe.studentInfo())
console.log(Tina.studentInfo())


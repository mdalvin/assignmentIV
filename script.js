class Student {
    constructor({firstName, lastName, dateOfBirth, gender, studentID, hobbies}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
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

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fN){
        if(/[A-Za-z]\s[a-Za-z]/.test(fN)){
            [this.firstName, thi.lastName] = fN.split(' ');
        }
    }

    set dob(date){
        return this.dateOfBirth.push(date);
    }
        
    set id(newId){
        return this.studentID.push(newId);
    }

    get hobbyList(){
        return this.hobbies;
    }

    set myhobby(newHobby){
        this.hobbies = newHobby;
    }

    set removeHobby(newHobby) {
        let hobbiesArray = [];
    
        for (let i = 0; i < this.hobbies.length; i++) {
          if (this.hobbies[i] !== newHobby) {
            hobbiesArray.push(this.hobbies[i]);
          }
        }
    
        this.songs = songsArray;
      }

    studentInfo(){
        return `Hi, I am ${this.fullName}. I am a ${this.gender}. I was borned on ${this.dateOfBirth}. My student ID is ${this.studentID}. My hobbies are ${this.hobbies}.`
    }
}

let Joe = new Student ({
    firstName: "Joe",
    lastName: "Bastianich",
    dateOfBirth: "August 10th 1978",
    gender: "male",
    studentID: "33445566",
    hobbies: ["fishing", "music", "soccer"]
})

let Tina = new Student ({
    firstName: "Tina",
    lastName: "Murdoch",
    dateOfBirth: "June 17th 1988",
    gender: "female",
    studentID: "abdadkcl",
    hobbies: ["hiking", "cooking", "reading"]

})

console.log(Joe.studentInfo())
console.log(Tina.studentInfo())

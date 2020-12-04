var student = {
    firstName: "Adilet",
    lastName : "Nasirov",
    studentId: 19245,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    averageGrade : function() {
        return Math.random();
    }
}

function showStudent() {
    for (x in student) {
        console.log(student[x] + " is of type ->  " + typeof student[x]);
    }
}
console.log(student);
console.log(showStudent());
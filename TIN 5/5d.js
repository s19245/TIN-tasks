function Student(index, firstName, lastName, gradeArr) {
    this.id = index;
    this.name = firstName;
    this.surname = lastName;
    this.grades = gradeArr;
    
    this.studentStatus = function() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10);
        }
        var avg = sum/this.grades.length;
        return "id:" + this.id + " name:" + this.name + " " + this.surname + " avg:" + avg;
    };
}

var Mozart = new Student(15, "Amadeusz", "Mozart", [2, 2, 3, 2]);

Object.defineProperty(Mozart, 'fullName', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(name) {
        var words = name.split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
});

Object.defineProperty(Mozart, 'avgGrade', {
    get: function() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10);
        }
        var avg = sum/this.grades.length;
        return avg;
    }
});

Mozart.fullName = "Amadeusz Wolfgang";
console.log(Mozart.fullName);
console.log(Mozart.avgGrade);
class Student {
    constructor(index, name, surname, grades) {
        this.id = index;
        this.name = name;
        this.surname = surname;
        this.grades = grades;
    }

    studentStatus() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10);
        }
        var avg = sum/this.grades.length;
        return "id:" + this.id + " name:" + this.name + " " + this.surname + " avg:" + avg;
    };

    get AvgGrade() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += parseInt(this.grades[i], 10);
        }
        var avg = sum/this.grades.length;
        return avg;
    }
    get fullName() {
        return this.name + ' ' + this.surname;
    }

    set fullName(name) {
        var words = name.split(' ');
        this.name = words[0] || '';
        this.surname = words[1] || '';
    }
}

var Adik = new Student(19245, 'Adik', 'Nasirov', [5,5,6,5,6]);

console.log(Adik.studentStatus());
Adik.fullName = 'Adik Nasirov';
console.log(Adik.fullName);
console.log(Adik.AvgGrade);
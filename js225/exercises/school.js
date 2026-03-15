function objectsEqual(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let [key, value] of Object.entries(object1)) {
    if (object2.hasOwnProperty(key) && object2[key] === value) continue;
    else return false;
  }
  
  return true;
}


function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        course.note = note;
      }
    },
  };
}


function school() {
  const students = [];
  const years = ['1st', '2nd', '3rd', '4th', '5th'];

  return {
    addStudent(student) {
      if (!years.includes(student.year)) return "Invalid Year";

      students.push(student);
      console.log('added:', students[students.length - 1].name);
      return;
    },

    enrollStudent(course, student) {
      for (let idx = 0; idx < students.length; idx += 1) {
        const currentStudent = students[idx];
        if (objectsEqual(currentStudent, student)) {
          student.addCourse(course);
          return;
        }
      }

      return "Student must be added to the School first!";
    },

    addGrade(student, courseCode, grade) {
      for (let course of student.courses) {
        if (course.code === courseCode) {
          course.grade = grade;
          return;
        }
      }

      return "Course must be added to the Student's courses first!"
    },

    getReportCard(student) {
      student.courses.forEach((course) => {
        if (course.hasOwnProperty('grade')) console.log(`${course.name}: ${course.grade}`);
        else console.log(`${course.name}: In Progress`);
      })
    },

    courseReport(courseName) {
      const gradeEntries = [];

      students.forEach(student => {
        student.courses.forEach(course => {
          if (course.name === courseName && course.hasOwnProperty('grade')) {
            gradeEntries.push(`${student.name}: ${course.grade}`)
          }
        });
      });

      if (gradeEntries.length === 0) return undefined;

      const report = [];
      const average = this.calculateAverage(gradeEntries);
      report.push(`=${courseName} Grades=`, ...gradeEntries, '---', `Course Average: ${average}`);

      return report.join('\n');
    },

    calculateAverage(grades) {
      let entries;
      let total = 0;

      for (entries = 0; entries < grades.length; entries += 1) {
        const grade = parseInt(grades[entries].split(': ')[1], 10);
        total += grade;
      }

      return total / (entries);
    }
  }
}


let newSchool = school();
let paul = createStudent('Paul', '3rd');
let mary = createStudent('Mary', '1st');
let kim = createStudent('Kim', '2nd');

newSchool.addStudent(paul);
newSchool.addStudent(mary);
newSchool.addStudent(kim);

newSchool.enrollStudent({name: 'Math', code: 101,}, paul);
newSchool.enrollStudent({name: 'Advanced Math', code: 102,}, paul);
newSchool.enrollStudent({name: 'Physics', code: 202,}, paul);
newSchool.addGrade(paul, 101, 95);
newSchool.addGrade(paul, 102, 90);

newSchool.enrollStudent({name: 'Math', code: 101,}, mary);
newSchool.addGrade(mary, 101, 91);

newSchool.enrollStudent({name: 'Math', code: 101,}, kim);
newSchool.enrollStudent({name: 'Advanced Math', code: 102,}, kim);
newSchool.addGrade(kim, 101, 93);
newSchool.addGrade(kim, 102, 90);

console.log(paul.courses);
console.log(mary.courses);
console.log(kim.courses);

console.log(newSchool);

console.log();

newSchool.getReportCard(paul);
/*
Math: 95
Advanced Math: 90
Physics: In progress
*/

console.log(newSchool.courseReport('Math'));
console.log(newSchool.courseReport('Advanced Math'));
console.log(newSchool.courseReport('Physics'));
'use strict';

function createStudent(name, strYear) {
  return {
    name, year: strYear, courses: [], notes: [],
    
    info() {
      console.log(`${name} is a ${strYear} year student`);
    },
    
    listCourses() {
      console.log(this.courses);
    },
    
    addCourse(courseObj) {
      this.courses.push(courseObj);
    },
    
    addNote(courseCode, additionalNote) {
      const courseName = this.getCourse(courseCode);
      
      if (this.notes.length === 0) {
        this.notes.push(`${courseName}: ${additionalNote}`);
        return;
      } else {
        for (let idx = 0; idx < this.notes.length; idx += 1) {
          const currentNote = this.notes[idx]
          const noteCourseName = currentNote.split(':')[0];
          
          if (noteCourseName === courseName) {
            this.notes[idx] += `; ${additionalNote}`;
            return;
          }
        }
      }
      
      this.notes.push(`${courseName}: ${additionalNote}`);
      
      return;
    },
    
    viewNotes() {
      console.log(this.notes.join('\n'));
    },
    
    updateNote(courseCode, newNote) {
      const courseName = this.getCourse(courseCode);

      for (let idx = 0; idx < this.notes.length; idx += 1) {
        const currentNote = this.notes[idx];
        const noteCourseName = currentNote.split(':')[0];

        if (courseName === noteCourseName) {
          this.notes[idx] = `${courseName}: ${newNote}`;
          return;
        }
      }
    },
    
    getCourse(code) {
      for (let idx = 0; idx < this.courses.length; idx += 1) {
        const course = this.courses[idx];
        if (course.code === code) return course.name;
      }
    },
  }
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
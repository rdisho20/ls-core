function generateClassRecordSummary(studentScores) {
  const studentGrades = populateStudentGrades(studentScores);
  const exams = generateExamAvgMinMax(studentScores);

  return {
    studentGrades,
    exams,
  }
}

function examScoreAvg(scores) {
  return scores.reduce((initial, score) => initial += score) / scores.length;
}

function sumExerciseScores(scores) {
  return scores.reduce((initial, score) => initial += score);
}

function computeFinalGrade(examAvg, exerciseSum) {
  return Math.round((examAvg * .65) + (exerciseSum * .35));
}

function getGradeLetter(grade) {
  if (93 <= grade) {
    return 'A';
  } else if (85 <= grade && grade <= 92) {
    return 'B';
  } else if (77 <= grade && grade <= 84) {
    return 'C';
  } else if (69 <= grade && grade <= 76) {
    return 'D';
  } else if (60 <= grade && grade <= 68) {
    return 'E';
  } else if (0 <= grade && grade <= 59) {
    return 'F';
  }
}

function populateStudentGrades(studentScores) {
  const grades = [];

  for (let index = 0; index < Object.entries(studentScores).length; index += 1) {
    const student = Object.entries(studentScores)[index];
    const examScores = student[1].scores.exams;
    const exerciseScores = student[1].scores.exercises;
    const examAvg = examScoreAvg(examScores);
    const exerciseSum = sumExerciseScores(exerciseScores);
    const finalGrade = computeFinalGrade(examAvg, exerciseSum);
    const gradeLetter = getGradeLetter(finalGrade);
    grades.push(`${finalGrade} (${gradeLetter})`)
  }

  return grades;
}

function collectExamScores(studentScores) {
  const exams = {};
  for (let index = 0; index < Object.entries(studentScores).length; index += 1) {
    const student = Object.entries(studentScores)[index];
    const examScores = student[1].scores.exams;

    for (let i = 0; i < examScores.length; i += 1) {
      const score = examScores[i];
      const examNumber = `exam${i + 1}`;

      if (exams.hasOwnProperty(examNumber)) {
        exams[examNumber].push(score);
      } else {
        exams[examNumber] = [score];
      }
    }
  }

  return exams;
}

function generateExamAvgMinMax(studentScores) {
  const exams = collectExamScores(studentScores);
  const results = [];

  for (let examScores of Object.keys(exams)) {
    const avg = parseFloat(examScoreAvg(exams[examScores]).toFixed(1));
    const min = exams[examScores].sort((a, b) => a - b).shift();
    results.push({
      average: avg,
      minimum: min,
      maximum: 100,
    })
  }

  return results;
}


let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

// console.log(Object.entries(studentScores)[0][1].scores.exams);

console.log(generateClassRecordSummary(studentScores));

/* returns:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/
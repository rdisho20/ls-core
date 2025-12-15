let rlSync = require('readline-sync');
let score1 = Number(rlSync.question('Enter score 1: '));
let score2 = Number(rlSync.question('Enter score 2: '));
let score3 = Number(rlSync.question('Enter score 3: '));
let avg = (score1 + score2 + score3) / 3;
let grade = '';

if (90 <= avg) {
  grade = 'A';
} else if (70 <= avg && avg < 90) {
  grade = 'B';
} else if (50 <= avg && avg < 70) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Based on the average of your 3 scores, your letter grade is "${grade}"`);
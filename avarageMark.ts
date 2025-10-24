const students = [
  { name: 'Anna', grades: [5, 4, 4, 5] },
  { name: 'Tom', grades: [3, 4, 2, 3] },
  { name: 'Kate', grades: [5, 5, 5, 4] },
];

type Student = {
  name: string;
  grades: number[];
  average?: number;
};

function avarageMakk(studArr: Student[]) {
  return studArr.map((student) => {
    let rowAver =
      student.grades.reduce((acc, val) => acc + val, 0) / student.grades.length;
    student.average = Math.round(rowAver * 10) / 10;
    return student;
  });
}

console.log(avarageMakk(students));

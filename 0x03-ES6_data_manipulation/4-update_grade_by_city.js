export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    student.grade = newGrade ? newGrade.grade : 'N/A'; // eslint-disable-line no-param-reassign
    return student;
  });
}

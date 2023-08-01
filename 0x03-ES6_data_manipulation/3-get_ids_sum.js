export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((totalId, student) => totalId + student.id, 0);
  }
  return 0;
}

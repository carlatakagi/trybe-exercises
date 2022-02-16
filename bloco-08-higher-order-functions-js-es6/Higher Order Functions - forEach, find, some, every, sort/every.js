// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:
const grades = {
  portugues: '',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));
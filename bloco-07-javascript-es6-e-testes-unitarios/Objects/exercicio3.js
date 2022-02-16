const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// funcao para adicionar chave
/* const adicionarKey = (objeto, chave, valor) => {
  objeto[chave] = valor;
}
adicionarKey(lesson2, 'turno', 'noite');
console.log(lesson2); */

// funçao para listar as chaves do objeto
/* const listarKeys = (objeto) => {
  const arrayLessons = Object.keys(objeto);
  for(index in arrayLessons) {
    console.log(arrayOfSkills);
  }
} */
const listarKeys = (objeto) => Object.keys(objeto);
console.log(listarKeys(lesson1));
console.log(listarKeys(lesson2));
console.log(listarKeys(lesson3));

// Crie uma função para mostrar o tamanho de um objeto.
const mostrarTamanhoObjeto = (objeto) => Object.keys(objeto).length;
console.log(mostrarTamanhoObjeto(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listarValores = (objeto) => Object.values(objeto);
console.log(listarValores(lesson3));

// crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function totalEstudantes(lessons) {
  const chaves = Object.keys(lessons);

  let total = 0;

  for (let index = 0; index < chaves.length; index += 1) {
    const chaveAtual = chaves[index];
    total += lessons[chaveAtual].numeroEstudantes;
  }

  return total;
}
console.log(totalEstudantes(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const valorPosicao = (objeto, number) => Object.keys(objeto)[number]; // number é a posiçao que queremos
console.log(valorPosicao(lesson3, 1));
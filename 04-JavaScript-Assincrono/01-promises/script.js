const promesa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: 'Guilherme', idade: 25 });
    }, 1000);
  } else {
    reject(Error('Um erro ocorreu na promise'));
  }
});

const retorno = promesa
  .then((resolucao) => {
    console.log(resolucao);
    return resolucao;
  })
  .then(
    (resolucao) => {
      console.log(resolucao);
    },
    (rejeitada) => {
      console.log(rejeitada);
    }
  )
  .finally((teste) => {
    console.log(teste);
  });

console.log(retorno);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário logado');
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);
});

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});

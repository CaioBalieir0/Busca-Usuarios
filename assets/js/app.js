async function pegarUsuarios(url) {
  try {
    const resposta = await axios.get(url);
    const usuarios = adicionarIdade(resposta.data);
    await atualizaUsuarios(usuarios);
    exibeUsuarios(usuarios);
  } catch (error) {
    console.error(error);
    msgErro("Erro ao buscar usuários");
  }
}

function adicionarIdade(usuarios) {
  function geraIdade() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
  }

  return usuarios.map((usuario) => ({
    ...usuario,
    idade: geraIdade(),
  }));
}

async function atualizaUsuarios(usuarios) {
  try {
    const resposta = usuarios.map((usuario) => {
      return axios.post("http://localhost:3000/usuarios", {
        nome: usuario.name,
        idade: usuario.idade,
      });
    });

    await Promise.all(resposta);
    console.error("Dados enviados com sucesso");
  } catch (error) {
    console.error(error);
    msgErro("Erro ao enviar os dados");
  }
}

const exibeUsuarios = (usuarios) => {
  const ul = document.querySelector("#listaUsuarios");
  ul.innerHTML = "";

  usuarios.forEach((usuario) => {
    const li = document.createElement("li");
    li.textContent = `Nome: ${usuario.name}. Idade: ${usuario.idade}`;
    ul.appendChild(li);
  });
};

const msgErro = (msg) => {
  const erro = document.querySelector("#msgErro");
  erro.textContent = msg;
};

document.querySelector("#buscarBtn").addEventListener("click", (e) => {
  e.preventDefault();
  pegarUsuarios("https://jsonplaceholder.typicode.com/users");
});

async function pegarUsuariosAPI(url) {
  try {
    const response = await axios(url);
    return adicionarIdade(response.data);
  } catch (error) {
    msgErro("Erro ao buscar usuários.");
  }
}

async function adicionarUsuarios(usuarios) {
  try {
    const usuariosCadastrados = await apiLocalGet();
    let response;

    if (usuariosCadastrados) {
      response = usuarios
        .filter(
          (e) => !usuariosCadastrados.find((usuario) => usuario.id === e.id)
        )
        .map((e) => axios.post("http://localhost:3000/usuarios", e));
    } else {
      response = usuarios.map((e) =>
        axios.post("http://localhost:3000/usuarios", e)
      );
    }

    await Promise.all(response);
    console.log("Usuários adicionados com sucesso!");
  } catch (error) {
    msgErro("Erro ao adicionar usuários no banco local.");
  }
}

async function apiLocalGet() {
  try {
    const response = await axios("http://localhost:3000/usuarios");
    return response.data;
  } catch (error) {
    msgErro("Erro ao buscar usuários no banco local.");
  }
}

function adicionarIdade(usuarios) {
  const aleatorio = () => Math.floor(Math.random() * 50 + 1);

  return usuarios.map((e) => ({
    ...e,
    idade: aleatorio(),
  }));
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
  pegarUsuariosAPI("https://jsonplaceholder.typicode.com/users").then((resp) =>
    adicionarUsuarios(resp)
  );

  apiLocalGet()
    .then((usuarios) => exibeUsuarios(usuarios))
    .catch("Erro ao imprimir usuários.");
});

async function apiLocal() {
  try {
    const response = await axios("http://localhost:3000/usuarios");
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar usuários no banco local.");
  }
}

const u = apiLocal();
u.then((resposta) => {
  if (!!resposta) console.log(resposta);
});

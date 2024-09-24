# Gerenciamento de usuários com AXIOS e JSON Server

Este projeto é uma aplicação simples que realiza requisições HTTP para uma API utilizando **Axios** e **JSON Server** . O objetivo é demonstrar o conhecimento em consumo de APIs REST, envio de dados e manipulação do DOM (Document Object Model).

## Funcionalidades

- **Busca de usuários** de uma API externa (exemplo: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)).
- **Cadastrar usuários** localmente usando um servidor simulado (JSON Server).
- Verificação para **evitar duplicatas** ao adicionar novos usuários.
- Exibição de usuários na interface.

## Tecnologias Utilizadas

- **JavaScript (ES6+):** Lógica de programação e manipulação do DOM.
- **Axios:** Cliente HTTP para fazer requisições GET e POST.
- **JSON Server:** Simula uma API RESTful localmente para armazenar e recuperar dados.
- **HTML/CSS:** Estrutura e estilo da interface web.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado

### Instalação

1. \*\*Clone o repositório:

   ```
   git clone https://github.com/CaioBalieir0/Busca-Usuarios.git
   cd Busca-Usuarios
   ```

   \*\*
2. **Instale o JSON Server (caso não tenha)**

```
   npm install -g json-server

```

3. **Inicie o JSON Server**

```
cd .\assets\
json-server --watch db.json
```

4. **Abra o arquivo HTML no navegador**


## Melhorias Futuras

* Implementação de atualização (PUT) e exclusão (DELETE) de usuários.
* Integração com uma API real para persistir os dados de forma remota.
* Validação de formulários antes de cadastrar novos usuários.
* Melhorias futuras com CSS

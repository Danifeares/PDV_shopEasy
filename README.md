# Sistema de Ponto de Venda

<img alt="Status Em Desenvolvimento" src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen">

---

## 📌Sobre o projeto

Projeto piloto de desenvolvimento de uma API para um PDV (Frente de Caixa), realizado como projeto final do curso de Desenvolvimento de Software com Foco em Back-end da Cubos Academy.

### Acesso ao sistema:

Você pode acessar e usar nossa aplicação diretamente através do link de deploy:

> [PDV - Acesse Aqui](https://witty-worm-tank-top.cyclic.app/)

---

## 📌Funcionalidades

- Listar categorias;
- Cadastrar Usuário;
- Efetuar Login do Usuário;
- Detalhar Perfil do Usuário Logado;
- Editar Perfil do Usuário Logado;

---

## 📌Utilização

Para uma utilização eficiente da nossa aplicação, listaremos abaixo todos os endpoints com suas funcionalidades e devidas rotas.

Para os testes utilizamos como url_base o nosso deploy:
<img src='./assets/url_base.png' width ='500'>

### 1. Listar categorias

Endpoint: `GET /categoria`

> Este endpoint permite que os usuários listem as categorias cadastradas.

<img src='./assets/categories/list_categories.png' width ='1000'>

---

## ✅Endpoints de Usuários
### 1. Cadastrar Usuário

Endpoint: `POST /usuario`

> Este endpoint permite que os usuários registrem um novo usuário no sistema.

#### Corpo da requisição:

```JSON
{
  "nome": "Nome do Usuário",
  "email": "email@exemplo.com",
  "senha": "senha123"
}
```

#### Observação: todos os campos são obrigatórios.

<img src='./assets/user/regist_user.png' width ='1000'>

---

### 2. Efetuar Login do Usuário

Endpoint: `POST /login`

> Permite que um usuário cadastrado realize o login no sistema.

#### Corpo da requisição:

```JSON
{
  "email": "email@exemplo.com",
  "senha": "senha123"
}
```

<img src='./assets/user/user_login.png' width ='1000'>

#### Observação: Após realizar o login com sucesso, um token será retornado. Esse token deve ser utilizado para autenticação nos próximos endpoints, pois eles são protegidos.

---

### 3. Detalhar Perfil do Usuário Logado

Endpoint: `GET /usuario`

> Este endpoint permite que um usuário visualize o seu perfil de forma detalhada.

#### Header:

- Authorization: Bearer SEU_TOKEN

<img src='./assets/user/detail_user.png' width ='1000'>

---

### 4. Editar Perfil do Usuário Logado

Endpoint: `PUT /usuario`

> Este endpoint permite que um usuário logado atualize as informações do seu perfil.

#### Header:

Authorization: Bearer SEU_TOKEN

#### Corpo da requisição:

```JSON
{
  "nome": "Novo Nome",
  "email": "novo-email@exemplo.com",
  "senha": "novaSenha"
}
```

#### Observação: Todos os campos são obrigatórios.

<img src='./assets/user/edit_user.png' width ='1000'>

---

## ✅Endpoints de Produtos
### 1. Cadastrar Produto

Endpoint: `POST /produto`

> Essa é a rota que permite o usuário logado cadastrar um novo produto no sistema.

#### Header:

Authorization: Bearer SEU_TOKEN

#### Corpo da requisição:

```JSON
{
  "descricao": "Nome do Produto",
  "quantidade_estoque": 100,
  "valor": 5000,
  "categoria_id": 1
}
```

#### Observação: todos os campos são obrigatórios.

<img src='./assets/product/regist_product.png' width ='1000'>

---

### 2. Editar Dados do Produto

Endpoint: `PUT /produto/:id`

> Essa é a rota que permite o usuário logado a atualizar as informações de um produto cadastrado.

#### Header:

Authorization: Bearer SEU_TOKEN

#### Corpo da requisição:

```JSON
{
  "descricao": "Nome do Produto",
	"quantidade_estoque": 150,
	"valor": 5500,
	"categoria_id": 8
}
```

#### Observação: todos os campos são obrigatórios.

<img src='./assets/product/edit_product.png' width ='1000'>

---

### 3. Listar Produtos

Endpoint: `GET /produto`

> Essa é a rota que será chamada quando o usuário logado quiser listar todos os produtos cadastrados.

#### Header:

Authorization: Bearer SEU_TOKEN

#### Requisição:

- Caso seja enviado o parâmetro do tipo query **categoria_id**, filtrar os produtos de acordo com a categoria, caso o id de categoria informada exista.

<img src='./assets/product/list_product_with_query.png' width ='1000'>

- Caso não seja informado o parâmetro do tipo query **categoria_id** todos os produtos cadastrados deverão ser retornados.

<img src='./assets/product/list_product_without_query.png' width ='1000'>

---

### 4. Detalhar Produto

Endpoint: `GET /produto/:id`

> Essa é a rota que permite o usuário logado obter um de seus produtos cadastrados.

#### Header:

Authorization: Bearer SEU_TOKEN

<img src='./assets/product/detail_product.png' width ='1000'>
---

### 5. Excluir Produto por ID

Endpoint: `DELETE /produto/:id`

> Essa é a rota que será chamada quando o usuário logado quiser excluir um de seus produtos cadastrados.

#### Header:

Authorization: Bearer SEU_TOKEN

<img src='./assets/product/delete_product.png' width ='1000'>
---

## ✅Endpoints de Clientes
### 1. Cadastrar Cliente

Endpoint: `POST /cliente`

> Essa é a rota que permite usuário logado cadastrar um novo cliente no sistema.

#### Header:

Authorization: Bearer SEU_TOKEN

#### Corpo da requisição:

```JSON
{
  "nome": "Nome do Cliente",
  "email": "cliente@email.com",
  "cpf": 99999999999,
  "cep": 99999999,
  "rua": "Rua teste",
  "numero": 99,
  "bairro": "Teste",
  "cidade": "Teste",
  "estado": "Teste"
}
```
OU

```JSON
{
  "nome": "Nome do Cliente",
  "email": "cliente@email.com",
  "cpf": 99999999999
}
```

#### Observação: Os campos nome, email e cpf são obrigatórios.

<img src='./assets/client/regist_client.png' width ='1000'>

---

### 2. Editar dados do Cliente

Endpoint: `PUT /cliente/:id`

> Essa é a rota que permite o usuário realizar atualização de um cliente cadastrado.

#### Header:

Authorization: Bearer SEU_TOKEN

#### Corpo da requisição:

```JSON
{
  "nome": "Nome do Cliente",
  "email": "cliente2@email.com",
  "cpf": 99999999990,
  "cep": 99999999,
  "rua": "Rua teste",
  "numero": 99,
  "bairro": "Teste",
  "cidade": "Teste",
  "estado": "Teste"
}
```
OU

```JSON
{
  "nome": "Nome do Cliente",
  "email": "cliente2@email.com",
  "cpf": 99999999990
}
```

#### Observação: Os campos nome, email e cpf são obrigatórios.

<img src='./assets/client/edit_client.png' width ='1000'>

---

### 3. Listar Clientes

Endpoint: `GET /cliente`

> Essa é a rota que será chamada quando o usuário logado quiser listar todos os clientes cadastrados.

#### Header:

Authorization: Bearer SEU_TOKEN

<img src='./assets/client/list_client.png' width ='1000'>

---

### 4. Detalhar Cliente

Endpoint: `GET /cliente/:id`

> Essa é a rota que será chamada quando o usuário logado quiser obter um de seus clientes cadastrados.

#### Header:

Authorization: Bearer SEU_TOKEN

<img src='./assets/client/detail_client.png' width ='1000'>

---

## 📌Tecnologias

#### As seguintes ferramentas foram usadas na construção do projeto:

#### **Server** ([NodeJS](https://nodejs.org/en/))

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[bcrypt](https://www.npmjs.com/package/bcrypt)**
- **[jsonwebtoken](https://jwt.io/)**
- **[KnexJS](http://knexjs.org/)**
- **[dotENV](https://github.com/motdotla/dotenv)**

> Veja o arquivo [package.json](https://github.com/SaraBahck/desafio-backend-m05-b2bt05-equipe07/blob/main/package.json)

#### **Utilitários**

- Deploy: **[API](https://witty-worm-tank-top.cyclic.app/)**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Teste de API: **[Insomnia](https://insomnia.rest/)**

---

## Autoras

<table>
  <tr>
    <td align="center"><a href="https://github.com/Danifeares"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/117787402?v=4" width="100px;" alt=""/><br /><sub><b>Daniela Felipe Soares</b></sub></a><br /><a href="https://github.com/Danifeares">👩‍💻</a></td>
	  <td align="center"><a href="https://github.com/GessycaBorges"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/124705468?v=4" width="100px;" alt=""/><br /><sub><b>Gessyca Borges</b></sub></a><br /><a href="https://github.com/GessycaBorges">👩‍💻</a></td>
    <td align="center"><a href="https://github.com/mirellaor"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/125171061?v=4" width="100px;" alt=""/><br /><sub><b>Mirella Rebouças</b></sub></a><br /><a href="https://github.com/mirellaor">👩‍💻</a></td>
    <td align="center"><a href="https://github.com/Nataliasalles1"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/109856255?v=4" width="100px;" alt=""/><br /><sub><b>Natalia Salles</b></sub></a><br /><a href="https://github.com/Nataliasalles1">👩‍💻</a></td>
    <td align="center"><a href="https://github.com/SaraBahck"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/100784417?v=4" width="100px;" alt=""/><br /><sub><b>Sara Webery</b></sub></a><br /><a href="https://github.com/SaraBahck">👩‍💻</a></td> 
    
  </tr>
</table>

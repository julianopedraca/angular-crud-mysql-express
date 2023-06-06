# Sistema de Gerenciamento de Livro

Esse é um sistema de gerenciamento de uma livraria feito com framework Angular no frontend e no backend foi aplicado uma API feita em express

## Recursos

- Adiciona novo livro com titulo e categoria.
- imprime todos os livros listados.
- painei de editar livro.
- deletar livros.

## Tecnologias Utilizadas

- [Angular](https://angular.io/docs)
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)

## Tela Inicial

![Alt text](./public/tela-inicial.png?raw=true "tela-inicial")

## Inserindo Livro

![Alt text](./public/adicionando-livro.png?raw=true "adicionando-livro")

## Editar Livro

![Alt text](./public/editar-livro.png?raw=true "editar-livro")

## Deletar Livro
![Alt text](./public/deletar-livro1.png?raw=true "deletar-livro1")
![Alt text](./public/deletar-livro2.png?raw=true "deletar-livro2")

## API Endpoints

- `GET /imprimelivros`: busca todos os livros da database.
- `POST /adicionalivro`: adiciona livro na database.
- `PUT /atualizalivro`: edita livro da database.
- `DELETE /deletalivro`: deleta livro da database.


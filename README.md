# Bonestore API

API REST para gerenciamento de produtos de uma loja de bonés. Esta API permite adicionar, atualizar, deletar e listar produtos. A documentação da API é gerada usando Swagger.

## Tecnologias Utilizadas

- Node.js
- Express
- SQLite
- Swagger
- Body-parser

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/bonestore-api.git
    cd bonestore-api
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor:

    ```bash
    node index.js
    ```

## Endpoints

### Adicionar um Novo Produto

- **URL**: `/bonestore/product`
- **Método**: `POST`
- **Corpo da Requisição**:

    ```json
    {
      "name": "Boné Preto",
      "price": 7990,
      "skuId": "78993000",
      "seller": "Lucas Xavier",
      "thumbnailHd": "https://dummyimage.com/600x400/000/fff",
      "inStock": true
    }
    ```

- **Resposta**:

    ```json
    {
      "id": 1
    }
    ```

### Obter Todos os Produtos

- **URL**: `/bonestore/product`
- **Método**: `GET`
- **Resposta**:

    ```json
    [
      {
        "id": 1,
        "name": "Boné Preto",
        "price": 7990,
        "skuId": "78993000",
        "seller": "Lucas Xavier",
        "thumbnailHd": "https://dummyimage.com/600x400/000/fff",
        "inStock": true
      }
    ]
    ```

### Atualizar um Produto

- **URL**: `/bonestore/product/{id}`
- **Método**: `PUT`
- **Parâmetros**:
  - `id` (integer): ID do produto a ser atualizado
- **Corpo da Requisição**:

    ```json
    {
      "name": "Boné Azul",
      "price": 8990,
      "skuId": "78993003",
      "seller": "Ana Silva",
      "thumbnailHd": "https://dummyimage.com/600x400/0000ff/fff",
      "inStock": true
    }
    ```

- **Resposta**:

    ```json
    {
      "message": "Produto atualizado"
    }
    ```

### Deletar um Produto

- **URL**: `/bonestore/product/{id}`
- **Método**: `DELETE`
- **Parâmetros**:
  - `id` (integer): ID do produto a ser deletado
- **Resposta**:

    ```json
    {
      "message": "Produto deletado"
    }
    ```

## Documentação da API

A documentação da API pode ser acessada em `http://localhost:3000/api-docs` após iniciar o servidor.

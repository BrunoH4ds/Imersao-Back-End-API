# Imersão Alura Back-End
Este projeto foi desenvolvido durante a Imersão Alura Back-End, onde criamos uma API para uma aplicação web parecida com uma rede social. A API foi construída utilizando MongoDB, Node.js e JavaScript, com a integração de IA do Gemini para gerar descrições automáticas de imagens. No final, aprendemos a colocar a API no Google Cloud, tornando-a acessível para todos.

## Tecnologias Utilizadas

- Node.js: Framework para desenvolvimento de servidores backend.
- MongoDB: Banco de dados NoSQL utilizado para armazenar dados da aplicação.
- JavaScript: Linguagem de programação utilizada tanto no backend (com Node.js) quanto na integração com a IA.
- Gemini AI: Utilizado para gerar descrições automáticas de imagens.
- Google Cloud: Plataforma de hospedagem para colocar a API online, acessível para todos.

## Funcionalidades
Geração Automática de Descrições de Imagens: Utiliza a IA do Gemini para gerar descrições precisas das imagens enviadas.
Banco de Dados MongoDB: Armazena informações dos usuários, postagens e dados relacionados à rede social.
API RESTful: A API foi construída com rotas RESTful para interação com o frontend da aplicação.

## Como Rodar o Projeto Localmente

Clone o repositório:

    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio

Instale as dependências: Certifique-se de ter o Node.js e o npm instalados. Depois, execute:

    npm i

Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto e adicione as variáveis necessárias, como a chave de acesso à API do Gemini, a string de conexão com o MongoDB e quaisquer outras configurações necessárias.

Execute o servidor: Para rodar o servidor, execute:

    npm run dev

A API estará rodando localmente em http://localhost:3000.

# Trybe Futebol Clube!

  ![Exemplo app front](assets/front-example.png)

  O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️

  Nesse projeto, fiquei responsávelpor desenvolver uma API (utilizando o método `TDD`) e também integrar *- através do docker-compose -* as aplicações para que elas funcionem consumindo um banco de dados.

  O back-end deste projeto foi dockerizado utilizando modelagem de dados através do Sequelize. O desenvolvimento do backend teve de  **respeitar regras de negócio** providas nas instruções do projeto para popular as tabelas e minha API foi consumida por um **front-end que já foi provido pela equipe da Trybe nesse projeto**.

  Para adicionar uma partida é necessário ter um _token_, portanto o usuário deve estar logado para fazer as alterações. Temos uma tabela de usuários `users`, uma tabela com as partidas `matches` que se relaciona com a tabela de times `teams`.

## Habilidades : 

- Realizar a dockerização dos apps, network, volume e compose;
- Modelar dados com MySQL através do Sequelize;
- Criar e associar tabelas usando models do Sequelize com TypeScript;
- Construir uma API REST com endpoints para consumir os models criados;
- Construir um CRUD com TypeScript, utilizando ORM;
- Validar e autenticar as requisições do usuário, utilizando middlewares de manipulação de erros e JWT;
- Aplicar a metodolodia TDD (Test Driven Development), utilizando Mocha, Chai e Sinon para desenvolvimento de testes de integração.


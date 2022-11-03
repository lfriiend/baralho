<h1>Pokémon TCG</h1> 



> Status do Projeto: :heavy_check_mark: CONCLUÍDO

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

:small_blue_diamond: [Ferramentas utilizadas](#ferramentas-utilizadas-books)

:small_blue_diamond: [Tarefas em aberto](#tarefas-em-aberto)

## Descrição do projeto 

<p align="justify">
  Um jogo de cartas que acumula pontos de acordo com a carta que é comprada diretamente da Poke API
</p>

## Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Coletar o nome do usuário, com handleSaveUser(), que irá jogar e exibir o mesmo no canto superior direito na próxima tela.

:heavy_check_mark: `Funcionalidade 2:` Exibir 5 cartas com getCards(), que foram requisitadas de forma dinâmica e aleatória da API Pokémon TCG com a função getIdRandom().

:heavy_check_mark: `Funcionalidade 3:` Comprar mais cartas do deck com addCard() até chegar o número máximo de cartas na mão (8 cartas).

:heavy_check_mark: `Funcionalidade 4:` Realizar o somatório da pontuação de todas as cartas e exibir no canto direito superior da tela.

:heavy_check_mark: `Funcionalidade 5:` Embaralhar as cartas e comprar 5 novamente.

## Layout ou Deploy da Aplicação :dash:

> Link do deploy da aplicação. Exemplo com netlify: https://certificates-for-everyone-womakerscode.netlify.app/

... 


## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator
```
Abra o projeto com seu editor, com terminal aberto digite:

```
npm start
```
Execute o aplicativo em modo de desenvolvimento.
Abra http://localhost:3000 para vê-lo no navegador.

A página vai recarregar quando você fizer alterações.


## Ferramentas utilizadas :books:

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [SASS](https://sass-lang.com/)
- [React Router](https://reactrouter.com/en/main)
- [Nodejs](https://nodejs.org/en/)
- [API Pokémon TCG](https://pokemontcg.io/)

## Tarefas em aberto

:memo: Tarefa 1 
- O erro listado abaixo é uma condição do TypeScript. Adicionar de forma dinâmica uma "key" para os respectivos elementos abaixo:

![js87](https://user-images.githubusercontent.com/103463820/199729850-7011bbc2-11ac-4da2-9b22-686cb14cd2cf.png)

:memo: Tarefa 2 
- Em caso de expansão do projeto, oo invés de fazer UMA CHAMADA para cada ÚNICA carta, o ideal seria fazer apenas UMA CHAMADA na API para trazer número X de cartas (Exemplo: 20 cartas), e trabalhar com esse número X dentro da aplicação. Isso evitaria o código de resposta HTTP 429 Too Many Requests.

![429](https://user-images.githubusercontent.com/103463820/199734148-709bce13-3f53-446c-9838-b76e20a164fe.jpeg)

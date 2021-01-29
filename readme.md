<h1 align="center"><img src="public/images/Logo_Launchstore.png" height="50" weigth="50"></h1>

<p align="center"><img src="https://img.shields.io/badge/<HTML>-<orange>"> <img src="https://img.shields.io/badge/<CSS>-<orange>"> <img src="https://img.shields.io/badge/<Javascript>-<orange>"> <img src="https://img.shields.io/badge/<NodeJs>-<orange>"> <img src="https://img.shields.io/badge/<Postgresql>-<orange>" > 

### Indice
<!--ts-->
* [Sobre](#sobre)
* [Status do Projeto](#status-do-projeto)
* [Histórico do Projeto](#historico-do-projeto)
* [Demonstração da Aplicação](#demonstração-da-aplicação)
* [Pré-requisitos](#pré-requisitos)
* [Testes](#testes)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Autor](#autor)
* [Licença](#licença)

<!--te-->

### Sobre 
[↩](#indice)

<p>Website e-commerce para compra e venda - Launchstore.</p>

<p>Detalhes do Projeto:</p>
<ul>
 <li>Criação de Listagem de Receitas;</li>
</ul>

### Status do Projeto 
[↩](#indice)

<h4> 	
Concluído
</h4>

### Histórico do Projeto 
[↩](#indice)

<p>Evolução do projeto ao longo do Bootcamp:</p>
<ul>
<li><a href="https://github.com/dimasdevspro/Launchstore">Início do projeto<a></li>
</ul>

### Demonstração da Aplicação 
[↩](#indice)

<h1 align="center"><img src="screenshots/Launchstore_Listando_Produtos.gif" height="350" weigth="350"></h1>



### Pré-requisitos 
[↩](#indice)

Para começar, você vai precisar instalar em sua máquina as seguintes ferramentas:

- Um repositório para seu projeto [Git](https://git-scm.com);

- Um editor de código [VSCode](https://code.visualstudio.com/);

- O motor V8 Javascript do Chrome, versão LTS [NodeJS](https://nodejs.org/en/download/);

- Sistema de Gerenciador de Dados [Postgresql](https://www.postgresql.org/download/);

- Cliente Gráfico e Multiplataforma do Postgresql [Postbird](https://www.electronjs.org/apps/postbird).


### Testes 
[↩](#indice)

```bash
# Baixe o editor equivalente para a sua plataforma
$ https://code.visualstudio.com/

# Vá para a pasta de downloads e execute o arquivo

# Acesse o terminal/cmd de sua plataforma (Win, Linux, etc)

# Clone este repositório com o seguinte comando abaixo
$ git clone https://github.com/dimasdevspro/Launchstore_Listando_produtos

# Ainda no terminal, acesse a pasta com mais um comando
$ cd Launchstore_Listando_produtos

# Agora digite este comando, para editar/testar o projeto
$ code .

```

### Instalação de Dependências 
[↩](#indice)

Instalação de Dependências "Express", "Nodemon", "Nunjucks", "Browsersync", "MethodOverride", "Postgresql", "Multer" para rodar aplicação.

```bash
# Abra o terminal do VSCode na Aba "Terminal"
$ "New Terminal"

# Certifique-se que o terminal está com o caminho de sua pasta, i.e
$ /Launchstore_Listando_produtos/

# Digite o comando no terminal para instalar o Express
$ npm install express

# Digite o comando no terminal para instalar o "Nodemon"
$ npm install -D nodemon

# Digite o comando no terminal para instalar o "Nunjucks"
$ npm install nunjucks

# Digite o comando no terminal para instalar o "Nunjucks"
$ npm install method-override

# Digite o comando no terminal para instalar o "Browsersync"
$ npm install browser-sync npm-run-all

# Certifique que no arquivo package.json, na linha "scripts" esteve descrito:
"scripts": {
    "start": "npm-run-all -p nodemon browser-sync",
    "nodemon": "nodemon src/server.js",
    "browser-sync": "browser-sync start --proxy http://localhost:3335 --files 'public, src/app/admin, src/app/views'"
  },

# Digite o comando no terminal para instalar o "Postgre"
$ npm install pg

# Digite o comando no terminal para instalar o "Postgre"
$ npm install multer

# Digite no terminal o seguinte comando para rodar o servidor
$ npm start

```

### Tecnologias utilizadas 
[↩](#indice)

As seguintes ferramentas foram usadas na construção do projeto:

- [VSCode](https://code.visualstudio.com/);
- [Git](https://git-scm.com);
- [NodeJS](https://nodejs.org/en/download/);
- [Postgresql](https://www.postgresql.org/download/);
- [Postbird](https://www.electronjs.org/apps/postbird).


### Autor 
[↩](#indice)

---

<a href="https://github.com/dimasdevspro">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/53888623?s=460&u=3c88fc42c7a0dc90293f9480a4288bf2f6a09396&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Dimas Alves Pereira</b></sub></a> <a href="https://github.com/dimasdevspro" title="Github"></a>


Feito com ❤️ por Dimas 👋🏽 Entre em contato!

[![Instagram Badge](https://img.shields.io/badge/-@dimasdevspro-f09433?style=flat-square&labelColor=f09433&logo=instagram&logoColor=white&link=https://www.instagram.com/dimasdevspro/)](https://www.instagram.com/dimasdevspro/) [![Linkedin Badge](https://img.shields.io/badge/-Dimas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/dimas_apereira/)](https://www.linkedin.com/in/dimas-apereira/) 
[![Gmail Badge](https://img.shields.io/badge/-dimasdevspro@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:dimasdevspro@gmail.com)](mailto:dimasdevspro@gmail.com)


### Licença 
[↩](#indice)

<img alt="APM" src="https://img.shields.io/apm/l/vim-mode">
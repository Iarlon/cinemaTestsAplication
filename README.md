# cinemaTestsAplication
<div style="text-align: center;">
  <img src="./assets/1902_a_trip_to_the_moon_001.webp" alt="Logo Compass" style="width: 75%; height: 250px; object-fit: cover;">
</div>

[![Node.js version](https://img.shields.io/static/v1?label=Node.js&message=20.15.0&color=green)](https://nodejs.org/en/download/prebuilt-installer)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/iarlon-oliveira/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](iarlonpvh@gmail.com)
[![Cinema](https://img.shields.io/badge/Cinema-crimson)](https://github.com/juniorschmitz/nestjs-cinema/tree/main)


Repository focused on cinema API testing, mainly 'non-functional' resquests of perfomance using k6.

# Avisos ❗❗❗
Para uso pleno de todas as ferramentas e recurso deste repositório, é necessário que siga os downloads no final da página por meio dos <a href="#links">LINKS</a> que foram disponibilizados. Lembre também de seguir o guia de instalação em <a href="#instalação">instalação</a> e seguir as <a href="#requisitos"> requisitos</a> para entender o que cada arquivo faz.

## Resumo
 Nesse repositório foi utilizado para testes a API pública <a href="https://github.com/juniorschmitz/nestjs-cinema/tree/main">nestjs-cinema</a>. Os testes foram escritos em javascript utilizando o framework K6. Para visualização dos bugs encontrados na API estarão relatados na <a>Issues</a> já o planejamento e o relatório estão na <a>wiki</a>. Para rodar os testes basta ir na pasta <a href='./projectK6/'>projectK6</a> e ler o <a href="./projectK6/README.md">README</a> para identificar quais rodar.

## Requisitos
Para utilizar do repositório é necessário:
- Baixar a API por meio do 'git clone';
- Ter o node Instalado;
- Rodar a API localmente pelo NPM;
- Instalar o K6;

## Instalação
1. Clonar a API:
Para clonar a API cinema, basta você clicar em 'code' no seu repositório e copiar o https, após isso você irá abrir seu terminal (Qualquer terminal do seu computador) e escrever:
```
git clone link-repositorio
```

2. Instalar node:
Para a instalação do node, basta abrir o site oficial do node clicando no<a href="https://nodejs.org/en/download/prebuilt-installer"> link</a>. Irá ter 2 links, baixe a mais estável sendo a LTS (Long-Term Support). Após isso, siga o passo a passo:
- Execute o arquivo baixado .msi e siga as instruções da instalação.
- Certifique-se de que a opção para adicionar o Node.js ao PATH está marcada. Isso permitirá que você use os comandos node e npm diretamente no terminal.

3. Executar a API localmente:
Para executar a API localmente, basta rodar o comando `npm install` para instalar as dependências e depois executar `npm run start` para poder fazê-la rodar. Para poder visualizar se está funcionando basta escrever este endereço no seu navegador de prefência para validá-lo http://localhost:3000 Ao final basta escrever http://localhost:3000/api/docs para visualizar o Swagger da API.

4. Para instalação do K6<br>
O K6 é uma ferramenta de performance, porém em Javascript, para rodar é necessário ter instalado o K6 em sua máquina. Para isso basta abrir o terminal. Dependendo de qual seu sistema, é necessário outra abordagem que pode ser facilmente encontrado no site deles "https://grafana.com/docs/k6/latest/set-up/install-k6/" e assim siga o passo a passo. Para windows:
- Abra o terminal que tenha em sua máquina por exemplo o prompt ou o powerShell;
- Instale o <a href="https://github.com/microsoft/winget-cli">Windows Package Manager</a> ou o <a href="https://chocolatey.org">Chocolatey package manager</a>;

- Caso use Windows package execute:
 ```terminal
winget install k6 --source winget
```

- Caso use chocolatey execute:
```terminal 
choco install k6
```

### Links
- <a href="https://nodejs.org/en/download/prebuilt-installer">Cinema API</a>;
- <a href="https://chocolatey.org">Chocolatey package manager</a>;
- <a href="https://nodejs.org/en/download/prebuilt-installer"> node</a>
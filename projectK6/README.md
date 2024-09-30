# Teste de performance utilizando k6
## Técnologias e ferramentas utilizadas:  
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JS</a><br>
- <a href="https://www.npmjs.com/">npm</a><br>
- <a href="https://k6.io/">k6</a><br>

### Pré-requisitos: 
- Instalação do <a src="https://k6.io/docs/getting-started/installation/">**k6**</a>

## Estrutura dos arquivos
Os arquivos foram estruturados de forma que a pasta data é onde fica as massas de códigos, a services é onde fica os serviços repetidos no código. Já na pasta support seria os de configurações para seu código. Já em Tests fica todos os testes.

## Como rodar os testes
Para rodar os testes, primeiramente é necessário que você vá até o local dos testes. Para entar no local do arquivo você utiliza o "cd" junto ao nome do diretório que você queira no terminal. Poderá ser utilizado o vscode para executá-lo ou até mesmo o terminal para execução dos testes.

### Entrando no diretório
Imaginando o cenário onde você queira ir para um diretório que nem o "documents" do windows, você irá abrir o terminal de sua preferência e executar esse comando:<br>
```terminal
cd Documents
```
Após realizar isso ele se encontrará no arquivo Documents do seu computado. Porém há como realizar essa trajetória diretamente no local onde baixou o repositório e ainda na pasta tests:<br>
```terminal
cd local/onde/baixou/cinemaTestsAplication/projectK6/tests
```

### Executando os testes
Após estar no local de tests, você pode ainda entrar no tipo exato de teste que você quer, pode ser o "flow" para os fluxos de testes ou algum endpoint igual o "produto". Assim para realizar os testes:<br>
```terminal
k6 run tests/movies/create/moviePost.js
```
Atente que será necessário executar passando exatamente o arquivo e seu formato como "produtoPost.js" e seu caminho.

## Detalhamento do código
Para a execução do código foi utilizado massa dinâmica com o objetivo de criar ou validar as requisições, foram criadas em sprints passadas e foram reutilizadas nesse novo código. Também foi criado uma função que retorna um token de algum usuário aleatório do banco de dados.
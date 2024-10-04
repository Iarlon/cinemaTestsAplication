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

### Extra - executar testes
Para executar os testes e ter uma melhor visualização, você pode colar esses comandos no seu terminal:
```
$env:K6_WEB_DASHBOARD = "true"
$env:K6_WEB_DASHBOARD_OPEN = "true"
$env:K6_WEB_DASHBOARD_HOST = "localhost"
$env:K6_WEB_DASHBOARD_PORT = "5665"
```
Podendo ser no terminal do seu computador, que irá disponibilizar uma dashboard do próprio k6 que irá substituir o sumário do terminal, irá abrir automaticamente uma página no seu navegador principal e abrir na porta 'localhost:5665'. Assim você poderá executar o comando de executar os testes normalmente. (é necessário que realize o comando toda vez que quiser utilizar desse método)<br>
#### Explicação do código
`$env:K6_WEB_DASHBOARD = "true"`

Esse comando ativa o dashboard web do k6. Quando o valor é definido como "true", ele habilita a funcionalidade de dashboard interativo enquanto os testes de carga estão sendo executados.

`$env:K6_WEB_DASHBOARD_OPEN = "true"`

Esse comando instrui o k6 a abrir automaticamente o dashboard web no navegador assim que o teste for iniciado, se o valor for "true". Isso facilita o acesso ao dashboard sem precisar abrir manualmente o endereço no navegador.

`$env:K6_WEB_DASHBOARD_HOST = "localhost"`

Esse comando define o host onde o dashboard web do k6 será acessível. No caso, o valor "localhost" indica que o dashboard estará disponível localmente no seu computador, acessível através do endereço http://localhost.

`$env:K6_WEB_DASHBOARD_PORT = "5665"`

Esse comando define a porta na qual o dashboard web do k6 vai ser servido. No caso, está definido para a porta 5665, então você acessará o dashboard na URL http://localhost:5665.

## Detalhamento do código
Para a execução do código foi utilizado massa dinâmica com o objetivo de criar ou validar as requisições, foram criadas em sprints passadas e foram reutilizadas nesse novo código. Também foi criado uma função que retorna um token de algum usuário aleatório do banco de dados.
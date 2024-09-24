# Planejamento de teste
## 1.	Nome do projeto
Cinema API

## 2.	Resumo
Iniciou-se testes a uma API de Cinema onde por meio de sua própria documentação, podemos identificar seus critérios e 2 users story, onde deveríamos criar testes de validação e relatar caso tenha algum bug na issues do gitlab. Para isso iremos fazer testes manuais no Postman e k6 para testes de performance.

### 2.1 Mapa mental
Para melhor entendimento foi criado também o mapa mental como forma de nortear a sequência tomada para produzir o planejamento e os testes no Postman.<br>
<img src="./assets/Userstory.png" alt="Mapa mental" style="width:550px; height: 600px;">
## 3.	Pessoas envolvidas
Iarlon Soares da Silva Oliveira
## 4.	Cenários de testes
-   Criando um Novo Filme;
-   Obter a lista de filmes;
-   Obter detalhes de um filme por ID;
-   Atualizando os detalhes de um filme por ID;
-   Excluindo um filme por ID;
-   Criando ticket para um filme;
-   Obter lista de tickets;
-   Deletar ticket pelo ID do ticket;
-   Obter ticket pelo ID;
-   Atualizando os detalhes de um ticket por ID;

## 5.	Local dos testes
Os testes serão feitos na API da CompassUOL: Cinema API. Utilizando da ferramenta Postman para realização desses testes.
## 6.	Casos de testes
Link para o relatório de testes -> <a href="./relatorio_de_teste.md">aqui</a>
|Cenários|Casos de teste|
|:---:|:---:|
|Os usuários deverão criar uma conta|CT001 – Testar os campos obrigatórios do usuarios;|
|Não deverá ser possível fazer ações e chamadas para usuários inexistentes |CT002 – Testar pesquisa de usuário inexistente;|
||CT003 – Testar exclusão de usuário inexistente;|
|Não deve ser possível criar um usuário com e-mail já utilizado| CT004 – Teste utilizando credenciais válidas já utilizadas;|
|Caso seja colocado informações de um ID inexistente no verbo PUT, deverá ser criado um novo usuário | CT005 – Teste utilizando um id válido não utilizado;|
|Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT| CT006 – Teste utilizando um e-mail válido já utilizado;|
|Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail| CT007 – Teste utilizando e-mail de provedores “gmail” ou “hotmail”;|
|Os e-mails devem seguir um padrão válido de e-mail para o cadastro|CT008 – Teste utilizando e-mail’s válidos;|
||CT009 – Teste utilizando e-mail’s inválidos;|
||CT010 - Teste utilizando mais de um campo de validação|
|As senhas devem possuir no mínimo 5 caracteres e no máximo 10 caracteres|CT011 - Teste utilizando senhas com menos do mínimo de 5 caracteres;|
||CT012 – Teste utilizando senhas com mais que o máximo de 10 caracteres.|
	
## 7.	Como os resultados dos testes serão divulgados
Irá ter print dos resultados obtidos na ferramenta do Postman junto ao suas descrições como por exemplo:<br>
Cenário: Os usuários deverão criar uma conta;<br>
CT001 – Testar os campos obrigatórios do usuário<br>
Objetivo do teste: Deverá ser utilizado o POST de usuários, inserindo dados válidos em cada campo e validá-lo.<br>
Resultado esperado: O usuário deverá receber um CODE 201 e uma mensagem “cadastro realizado com sucesso” junto ao seu id.<br>
Resultado obtido: O usuário recebe o CODE 201 e seu id.<br>

### 7.1 Casos de teste
Casos de testes serão compartilhados em um arquivo separado, onde será explicado e junto com suas evidências.<a href="./"></a>
## 8.   Testes candidatos à automação
Analizando os testes, foi entendido que fazer a automatização de POST (cadastrar usuário), DELETE (exclusão de usuários) e GET (listar usuários), seriam algo que poderia ser facilmente automatizados, para evitar retrabalho e podendo ser utilizado em qualquer fase na hora dos testes. Calculando o número que é afetado por esses verbos seria: 8/12 = 0,666666667 = 67%. Ou seja, iria 3/5 do swagger, o que poderia acelerar futuros testes de regressão.
## 9.	Cronograma.
Período de início: 27/06/24<br>
Data de entrega: 11/07/24

<a href="../README.md">README</a>

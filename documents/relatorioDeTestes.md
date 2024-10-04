# Casos de testes
## Cenário de teste 1
Cenário: Desempenho da API rota movies;<br>
CT032 - Criar filme;<br>
Objetivo do teste: Deverá ser utilizado o POST de movies, inserindo dados válidos em cada campo e validá-lo.<br>
Resultado esperado: O usuário deverá receber um CODE 201, com média de resposta de 200ms e requisição por segundos de 100.<br>
Resultado obtido: O resultado obtido é status 201, a média de resposta fica abaixo de 2ms e 118 requisição por segundos.<br>
<img src="../assets/evidences/movieCreateSmoke/Captura de tela 2024-10-02 171933.png" alt="Foto do resultado" style="width:800px; height:350px">

Cenário - Desempenho da API rota movies;<br>
CT033 - Listar filmes;<br>
Objetivo do teste: Deverá ser utilizado o GET de movies, utilizando um id válido de um filme.<br>
Resultado esperado: O usuários receber status 200, com média de resposta 100ms e dividir o máximo de filmes em páginas de 20 filmes.<br>
Resultado obtido: O usuário recebe status 200, média de resposta 2ms, porém não foi possível implementar a limitação para apenas 20 filmes.<br>
<img src="../assets/evidences/movieGet/Captura de tela 2024-10-02 111401.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

Cenário - Desempenho da API rota movies;<br>
CT034 - Listar por meio do id;<br>
Objetivo do teste: Deverá ser utilizado o GET de movies, utilizando um ID válido de um movie.<br>
Resultado esperado: O usuários receber status 201, com média de resposta 50ms e 50 requisições por segundo.<br>
Resultado obtido: Recebe status 200, a média de resposta de 2ms e 100 requisições por segundo.<br>
<img src="../assets/evidences/movieGet/id/Captura de tela 2024-10-01 184752.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

Cenário - Desempenho da API rota movies;<br>
CT035 - Atualizar filmes;<br>
Objetivo do teste: Deverá ser utilizado o PUT de movies, utilizando um filme já cadastrado para sua modificação.<br>
Resultado esperado: O usuário deverá receber status 201, a média de resposta deve ser 300ms e 50 requisições por segundo.<br>
Resultado obtido: O usuário na verdade recebe status 200, sua média de resposta fica entre 2ms e 230 requisições por segundo.<br>
<img src="../assets/evidences/movieChageSmoke/Captura de tela 2024-10-01 182047.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

Cenário - Desempenho da API rota movies;<br>
CT036 - Exclusão de filme;<br>
Objetivo do teste: Deverá ser utilizado o DELETE de movies, utilizando um ID cadastrado no banco.<br>
Resultado esperado: O usuário deverá receber um CODE 201, a média de resposta de 400ms e 30 requisições por segundo.<br>
Resultado obtido: O usuário recebe o CODE 201, média de 70ms e 580 requests por segundo. Algumas requests falham por falta de filmes no banco, porém isso está ligado diretamente a quantos filmes você cria.<br>
<img src="../assets/evidences/movieDeleteSmoke/Captura de tela 2024-10-01 164704.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

## Cenário de teste 2

Cenário - Desempenho da API rota tickets;<br>
CT037 - Criar ticket;<br>
Objetivo do teste: Deverá ser utilizado o POST de tickets, utilizando um filme já cadastrado para cadastrar um novo ticket com o seu id.<br>
Resultado esperado: O usuário deverá conseguir criar um ticket com 50 requisições por segundo e 300ms de média de resposta.<br>
Resultado obtido: O usuário adm consegue realizar as requisições, com 2ms e 100 requisições por segundo.<br>
<img src="../assets/evidences/ticketCreate/Captura de tela 2024-10-02 132535.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

Cenário - Desempenho da API rota tickets;<br>
CT038 - Listar ticket;<br>
Objetivo do teste: Deverá ser utilizado o GET de tickets, listando todos os tickets cadastrados.<br>
Resultado esperado: O usuário deverá conseguir listar os tickets com 50 requisições por segundo e 300ms de média de resposta.<br>
Resultado obtido: O usuário adm consegue realizar as requisições, com 2ms e 100 requisições por segundo.<br>
<img src="../assets/evidences/ticketList/Captura de tela 2024-10-02 133722.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

## Cenário de teste 3

Cenário - Desempenho da API fluxo - admUser;<br>
CT042 - Smoke test admUser;<br>
Objetivo do teste: Deverá ser simulado um fluxo de usuário ADM onde ele irá criar filme, usar o verbo GET, GET/_id e no final ele apaga. Utilizando de um teste de Smoke.<br>
Resultado esperado: O usuário deverá conseguir realizar todas as requisições<br>
Resultado obtido: O usuário adm consegue realizar as requisições, com 2ms e 6 requisições por segundo.<br>
<img src="../assets/evidences/flow/admUser/smoke/Captura de tela 2024-10-03 163229.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

Cenário - Desempenho da API fluxo - admUser;<br>
CT043 - Load test admUser;<br>
Objetivo do teste: Deverá ser simulado um fluxo de usuário ADM onde ele irá criar filme, usar o verbo GET, GET/_id e no final ele apaga. Utilizando de um teste de Load.<br>
Resultado esperado: O usuário deverá conseguir realizar todas as requisições, em pelo menos 50 requisições por segundo e 2000ms de média de resposta.<br>
Resultado obtido: O usuário adm consegue realizar as requisições, com 4ms e 150 requisições por segundo. Deu request failed que afetou 3 requisições, porém não suficiente para afetar o teste.<br>
<img src="../assets/evidences/flow/admUser/load/Captura de tela 2024-10-03 153920.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

Cenário - Desempenho da API fluxo - admUser;<br>
CT044 - Spike test admUser;<br>
Objetivo do teste: Deverá ser simulado um fluxo de usuário ADM onde ele irá criar filme, usar o verbo GET, GET/_id e no final ele apaga. Utilizando de um teste de Spike.<br>
Resultado esperado: O usuário deverá conseguir realizar todas as requisições, em pelo menos 200 requisições por segundo e 5000ms de média de resposta.<br>
Resultado obtido: O usuário adm consegue realizar as requisições, com 200ms e 660 requisições por segundo.<br>
<img src="../assets/evidences/flow/admUser/spike/Captura de tela 2024-10-03 165143.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

Cenário - Desempenho da API fluxo - admUser;<br>
CT045 - Stress test admUser;<br>
Objetivo do teste: Deverá ser simulado um fluxo de usuário ADM onde ele irá criar filme, usar o verbo GET, GET/_id e no final ele apaga. Utilizando de um teste de Stress.<br>
Resultado esperado: O usuário deverá conseguir realizar todas as requisições, em pelo menos 150 requisições por segundo e 5000ms de média de resposta.<br>
Resultado obtido: O usuário adm consegue realizar as requisições, com 4ms e 150 requisições por segundo.<br>
<img src="../assets/evidences/flow/admUser/stress/Captura de tela 2024-10-03 164758.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

Cenário - Desempenho da API fluxo - admUser;<br>
CT046 - Scalability test admUser;<br>
Objetivo do teste: Deverá ser simulado um fluxo de usuário ADM onde ele irá criar filme, usar o verbo GET, GET/_id e no final ele apaga. Utilizando de um teste de Scability.<br>
Resultado esperado: O usuário deverá conseguir realizar todas as requisições, em pelo menos 150 requisições por segundo e 5000ms de média de resposta.<br>
Resultado obtido: O usuário adm consegue realizar as requisições, com 3500ms e 600 requisições por segundo.<br>
<img src="../assets/evidences/flow/admUser/scalability/Captura de tela 2024-10-03 174640.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

## Cenário de teste 4

Cenário - Desempenho da API fluxo - comunUser;<br>
CT047 - Smoke test comunUser;<br>
Objetivo do teste: Deverá ser simulado um fluxo de usuário comum onde ele irá criar um ticket de algum filme, irá pesquisar o catálogo de filmes, após isso irá escolher um dos filmes por seu id e executar um último get/_id. Ao final ele cria um ticket e lista todos os tickets. Utilizando de um teste de Smoke.<br>
Resultado esperado: O usuário deverá conseguir realizar todas as requisições.<br>
Resultado obtido: O usuário adm consegue realizar as requisições, com 2ms e 560 requisições por segundo.<br>
<img src="../assets/evidences/flow/comunUser/smoke/Captura de tela 2024-10-04 080150.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

Cenário - Desempenho da API fluxo - comunUser;<br>
CT048 - Load test comunUser;<br>
Objetivo do teste: Deverá ser simulado um fluxo de usuário comum onde ele irá criar um ticket de algum filme, irá pesquisar o catálogo de filmes, após isso irá escolher um dos filmes por seu id e executar um último get/_id. Ao final ele cria um ticket e lista todos os tickets. Utilizando de um teste de Load.<br>
Resultado esperado: O usuário deverá conseguir realizar todas as requisições, em pelo menos 50 requisições por segundo e 2000ms de média de resposta.<br>
Resultado obtido: O usuário adm consegue realizar as requisições, com 4500ms e 91 requisições por segundo.<br>
<img src="../assets/evidences/flow/comunUser/load/Captura de tela 2024-10-03 194629.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

Cenário - Desempenho da API fluxo - comunUser;<br>
CT049 - Spike test comunUser;<br>
Objetivo do teste: Deverá ser simulado um fluxo de usuário comum onde ele irá criar um ticket de algum filme, irá pesquisar o catálogo de filmes, após isso irá escolher um dos filmes por seu id e executar um último get/_id. Ao final ele cria um ticket e lista todos os tickets. Utilizando de um teste de Spike.<br>
Resultado esperado: O usuário deverá conseguir realizar todas as requisições, em pelo menos 200 requisições por segundo e 5000ms de média de resposta.<br>
Resultado obtido: O usuário adm consegue realizar as requisições, com 4000ms e 410 requisições por segundo.<br>
<img src="../assets/evidences/flow/comunUser/Spike/Captura de tela 2024-10-03 183619.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

Cenário - Desempenho da API fluxo - comunUser;<br>
CT050 - Stress test comunUser;<br>
Objetivo do teste: Deverá ser simulado um fluxo de usuário comum onde ele irá criar um ticket de algum filme, irá pesquisar o catálogo de filmes, após isso irá escolher um dos filmes por seu id e executar um último get/_id. Ao final ele cria um ticket e lista todos os tickets. Utilizando de um teste de Stress.<br>
Resultado esperado: O usuário deverá conseguir realizar todas as requisições, em pelo menos 150 requisições por segundo e 5000ms de média de resposta.<br>
Resultado obtido: O usuário adm consegue realizar as requisições, com 29ms e 140 requisições por segundo.<br>
<img src="../assets/evidences/flow/comunUser/stress/Captura de tela 2024-10-03 182950.png" alt="Foto do resultado" style="width:800px; height:350px"><br>

Cenário - Desempenho da API fluxo - comunUser;<br>
CT051 - Scalability test comunUser;<br>
Objetivo do teste: Deverá ser simulado um fluxo de usuário comum onde ele irá criar um ticket de algum filme, irá pesquisar o catálogo de filmes, após isso irá escolher um dos filmes por seu id e executar um último get/_id. Ao final ele cria um ticket e lista todos os tickets. Utilizando de um teste de Scalability.<br>
Resultado esperado: O usuário deverá conseguir realizar todas as requisições, em pelo menos 150 requisições por segundo e 5000ms de média de resposta.<br>
Resultado obtido: O usuário adm consegue realizar as requisições, com 3000ms e 150 requisições por segundo. Falhou 3 posts, porém não se sabe ao certo a causa desses erros.<br>
<img src="../assets/evidences/flow/comunUser/scalability/Captura de tela 2024-10-03 191322.png" alt="Foto do resultado" style="width:800px; height:350px"><br>
<a href="">issues</a>
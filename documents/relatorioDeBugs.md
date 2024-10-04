# Casos de testes
## Bug de requisito:

### bug 1:
Descrição: PUT movies sem body: A ausência de um body no PUT impede o uso adequado do endpoint.<br>
<img src="../assets/bugs/bug1/Captura de tela 2024-10-04 085929.png" alt="bug" style="width:900px; height:350px"><br>
### bug 2:
Descrição: PUT, DELETE e GET/{_id} derrubando a API: Na rota de tickets os verbos put, delete e get/id estão derrubando a api, API não deveria cair ao fazer essas requisições.<br>
<img src="../assets/bugs/bug2/Captura de tela 2024-10-04 090709.png" alt="bug" style="width:900px; height:350px"><br>
### bug 3:
Descrição: API aceita qualquer valor nos parâmetros sem validação/criação de mais de um campo: Espera-se que a API valide os dados de entrada. Isso permite que crie diversos campos diferentes e irá aceitar.<br>
<img src="../assets/bugs/bug3/Captura de tela 2024-10-04 090858.png" alt="bug" style="width:900px; height:350px"><br>
### bug 4:
Descrição: PUT, DELETE e POST de movies sem retorno de body: O body não retorna nenhum body, impactando a consistência do fluxo.<br>
<img src="../assets/bugs/bug4/Captura de tela 2024-10-04 091204.png" alt="bug" style="width:900px; height:350px"><br>
### bug 5:
Descrição: PUT e DELETE com status inconsistentes: Os status deveriam ser padronizados ao invés de haver diferentes status para cada rota. Esse é o exemplo de put de movies e tickets com respostas diferentes:<br>
<img src="../assets/bugs/bug5/Captura de tela 2024-10-04 091129.png" alt="bug" style="width:900px; height:350px">
<img src="../assets/bugs/bug5/Captura de tela 2024-10-04 091135.png" alt="bug" style="width:400px; height:350px"><br>
### bug 6:
Descrição: Número de assento >=100: Diz ser limitado igual a 100, porém se passar igual a 100 ele irá rejeitar.<br>
<img src="../assets/bugs/bug6/Captura de tela 2024-10-04 091326.png" alt="bug" style="width:400px; height:950px">

## Bug impeditivo:
Por conta do não funcionamento dos verbos de delete, PUT e get/{_id} de tickets, não foi possível criar um fluxo mais fiel a realidade e muito menos evitar o acúmulo de informação na API.
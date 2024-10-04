# Análise de Testes da API CinemaAPI
## Introdução
Este documento contém a análise dos testes realizados na API CinemaAPI. O objetivo é identificar fraquezas, desempenho e pontos de melhoria da API.
## Objetivo dos Testes
- Verificar a funcionalidade das endpoints da API.
- Avaliar a performance sob carga.
- Identificar possíveis falhas e comportamentos inesperados.
## Metodologia de Testes
- Ferramenta utilizada: [k6 e swagger]
- Tipos de testes realizados:
  - Testes de smoke
  - Testes de load
  - Testes de stress
  - Testes de escalabilidade
  - Testes de pico

## Resultados dos Testes
### Testes de Funcionalidade
- [movies] - Resultado: [Passou]
  - Observações: Apesar da breve passada por cima do conteúdo dos testes funcionais, foi possível ver inconsistência nas suas informações, porém o principal fator era sua falta de validação de informações, permitindo criação de campos aleatório.
- [tickets] - Resultado: [Falhou]
  - Observações: Apesar da breve passada por cima do conteúdo dos testes funcionais, além de conter os mesmos erros de tickets, sofre com um problema pior do que o de movies pois nesta rota não tem funcionalidades funcionando, além de também impedir um bom tratamento dos testes não funcionais.

### Testes de performance
#### Desempenho sob smoke:
- A api suportou tranquilamente a mesma quantidade de VUs (5), para aprovação das rotas individuais foi utilizado de 20 para maior validação, com o objetivo apenas de validar suas funcionalidades e métricas.

#### Desempenho sob load:
- A api suportou tranquilamente a mesma quantidade de VUs (300).

#### Desempenho sob stress:
- A api suportou tranquilamente uma quantidade acima do load de VUs (700), a api suportaria valores bem maiores.

#### Desempenho sob escalabilidade:
- A api suportou tranquilamente utilizando de um formato de fluxo de admUser onde iria apenas criar, apagar e listar os filmes, porém em tickets o desempenho já diminue por conta da limitação da API que impede a exclusão dos tickets.
#### Desempenho sob pico:
- A api suportou tranquilamente a mesma quantidade de VUs (máximo de 700 nos testes), a api suportaria valores maiores.

## Fraquezas Identificadas
- Desempenho lento em GET de tickets e movies, isso se dá por conta de uma grande carga de informações, isso poderia ser limitado caso dividisse os gets em páginas.
- Falta de validação em POST e PUT que dão liberdade para a pessoa modificar os campos.

## Recomendações
- Melhorar a validação de entradas nos endpoints.
- Otimizar a lógica em POST para melhorar a performance dos testes ao retornar body com `_id` para que possa facilitar os testes.

## Conclusão
A análise dos testes realizados mostra que, apesar de movies ter boas respostas e funcionar corretamente, ainda há falta de validações nos campos, existem áreas que precisam de atenção e melhorias. O maior problema seria o fato de tickets estar comprometida irá impedir de criar um cenário real. Há também a falta de rotas como `/usuarios` e `/login` pois há essa opção de validação para determinar se é administrador ou não. A documentação deve ser atualizada à medida que novas funcionalidades são implementadas e os testes são realizados.


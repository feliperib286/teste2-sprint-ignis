<h1 align="center">🦦Capydev🦦 - BRANCH RESERVADA PARA DESENVOLVIMENTO.</h1>

<p align="center">A CapyDev é reconhecida por sua abordagem ágil e por desenvolver produtos tecnológicos de ponta que ajudam seus clientes a alcançar ao próximo nível em inovação digital. em busca de novos desafios, a equipe continua crescendo e se reinventando, com a missão de criar soluções que façam a diferença no mundo conctado.
A CapyDev é uma equipe de desenvolvedores criada em 2024 por um grupo de estudantes da Fatec Jacareí apaixonados por tecnologia e inovação. Inspirados pela resiliência das Capivaras, animal símbolo da equipe, os decidiram unir suas habilidades de desenvolvimento de software, Design digital, Gerenciamento de dados, entre outros conhecimentos, para resolver problemas de maneira eficiente e colaborativa.</p>

<h2 align="center">📌Sobre o Projeto</h2>

# 🔥 IGNIS – Monitoramento Inteligente de Queimadas
 
O **IGNIS** é uma plataforma web desenvolvida para facilitar o acesso a informações sobre queimadas e incêndios florestais. O sistema utiliza dados públicos do **Programa Queimadas – INPE** para fornecer informações detalhadas sobre **focos de calor, risco de fogo e áreas queimadas** em diferentes regiões do Brasil.
 
Com o IGNIS, gestores ambientais, pesquisadores, bombeiros e a população em geral podem visualizar **mapas interativos, gráficos dinâmicos e análises estatísticas**, auxiliando na **prevenção, combate e monitoramento de incêndios florestais**.
 
---

<h2>Sprints</h2>

| Sprints | Início | Fim | Relatório |
| ------- | ------ | --- | --------- |
| 1ª sprint | 24/03/2025 | 17/04/2025 | <a href="https://github.com/Capydev-jac/Projeto-Ignis/tree/1-sprint">Ver</a>
| 2ª sprint | 22/04/2025 | 15/05/2025 |
| 3ª sprint | 16/05/2025 | 10/06/2025 |

<h2>Product Backlog</h2>

| ID    | Requisito                        | Descrição                                            | Prioridade | User Story                                                                                      | Critérios de Aceitação (DoD)                                                                                                                                           | Definição de Pronto (DoR)                                                                                               |
|-------|-----------------------------------|------------------------------------------------------|------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| RF01  | Focos de calor por estado         | Permitir consulta dos focos de calor por estado.      | Alta       | Como usuário, quero visualizar os focos de calor por estado para entender onde há incêndios.    | ✅ O sistema deve permitir busca por estado. <br> ✅ Os dados sobre os focos de calor devem ser extraídos corretamente do banco Queimadas. <br> ✅ A exibição deve incluir tabelas, gráficos e mapas de cada estado. <br> ✅ O sistema deve ser responsivo. | 🔹 Banco de dados: Queimadas. <br> 🔹 Exibição: Tabelas, gráficos e mapa interativo. <br> 🔹 Softwares: PostgreSQL, DB Designer. |
| RF02  | Focos de calor por bioma          | Permitir consulta dos focos de calor por bioma.       | Alta       | Como usuário, quero visualizar os focos de calor por bioma para entender os impactos ambientais.  | ✅ Deve ser possível selecionar um bioma específico. <br> ✅ Os dados de focos de calor devem ser extraídos corretamente do banco Queimadas. <br> ✅ A exibição deve incluir gráficos e tabelas referentes a cada bioma. | 🔹 Banco de dados: Queimadas. <br> 🔹 Exibição: Gráficos interativos e tabelas. <br> 🔹 Softwares: PostgreSQL, DB Designer. |
| RF03  | Risco de fogo por estado          | Permitir consulta do risco de fogo por estado.        | Alta       | Como usuário, quero consultar o risco de fogo por estado para planejar ações preventivas.        | ✅ O sistema deve exibir informações detalhadas sobre risco de fogo por estado. <br> ✅ O site deve apresentar os filtros selecionados para consulta. | 🔹 Banco de dados: Queimadas. <br> 🔹 Exibição validada pela equipe. <br> 🔹 Softwares: PostgreSQL, DB Designer. |
| RF04  | Risco de fogo por bioma           | Permitir consulta do risco de fogo por bioma.         | Alta       | Como usuário, quero consultar o risco de fogo por bioma para avaliar padrões ambientais.         | ✅ A busca deve permitir selecionar um bioma específico. <br> ✅ A exibição deve incluir destaques no mapa e gráficos sobre o bioma selecionado (risco de fogo). | 🔹 Banco de dados validado. <br> 🔹 Exibição: Gráficos comparativos. <br> 🔹 Softwares: PostgreSQL, DB Designer. |
| RF05  | Área queimada por estado          | Permitir consulta da área queimada por estado.        | Média      | Como usuário, quero visualizar a área queimada por estado para compreender a extensão dos incêndios. | ✅ O sistema deve exibir os dados de área queimada corretamente. <br> ✅ Os dados devem ser validados pelo PO antes da implementação. <br> ✅ A exibição deve incluir, gráficos de área e tabelas baseado na consulta solicitada. | 🔹 Banco de dados estruturado. <br> 🔹 Exibição: Gráficos de área. <br> 🔹 Softwares: PostgreSQL, DB Designer. |
| RF06  | Área queimada por bioma           | Permitir consulta da área queimada por bioma.         | Média      | Como usuário, quero acessar dados da área queimada por bioma para entender os impactos.          | ✅ A busca deve permitir filtragem por bioma. <br> ✅ A exibição da área deve incluir gráficos e tabelas baseada na consulta por bioma. | 🔹 Banco de dados validado. <br> 🔹 Exibição: Gráficos interativos e tabelas. <br> 🔹 Softwares: PostgreSQL, DB Designer. |
| RF07  | Gráficos de focos de calor        | Exibir gráficos de focos de calor por estado e bioma. | Média      | Como usuário, quero visualizar gráficos de focos de calor para facilitar a análise.               | ✅ O formato do gráfico deve ser definido pela equipe e validado pelo PO. <br> ✅ O sistema deve permitir seleção de filtros de focos de calor para análise detalhada. | 🔹 Formato de gráfico definido pela equipe. <br> 🔹 Softwares: HTML5, CSS3, TypeScript. |
| RF08  | Gráficos de risco de fogo         | Exibir gráficos do risco de fogo por estado e bioma.  | Média      | Como usuário, quero visualizar gráficos de risco de fogo para entender as áreas vulneráveis.     | ✅ O formato do gráfico deve ser definido pela equipe e validado pelo PO. <br> ✅ O sistema deve permitir seleção de filtros de risco de fogo para análise detalhada. | 🔹 Dados organizados previamente. <br> 🔹 Softwares: HTML5, CSS3, TypeScript. |
| RF09  | Gráficos de área queimada         | Exibir gráficos da área queimada por estado e bioma.  | Média      | Como usuário, quero visualizar gráficos da área queimada para identificar padrões de recuperação. | ✅ O formato do gráfico deve ser definido pela equipe e validado pelo PO. <br> ✅ O sistema deve permitir seleção de filtros das áreas queimadas para análise detalhada. | 🔹 Organização dos dados definida. <br> 🔹 Softwares: HTML5, CSS3, TypeScript. |
| RF10  | Restringir consultas por tempo    | Permitir que o usuário filtre consultas por período de tempo. | Alta | Como usuário, quero filtrar os dados por período de tempo para análise específica.              | ✅ O sistema deve permitir seleção de intervalos de tempo para filtragem. <br> ✅ A funcionalidade deve ser testada para garantir funcionamento correto. <br> ✅ O banco de dados deve suportar os filtros temporais sem perda de desempenho. | 🔹 Regras de filtragem definidas pela equipe. <br> 🔹 Softwares: PostgreSQL, DB Designer. |
| RF11  | Análise de meses de risco de fogo | Permitir visualizar os meses com maior risco de fogo. | Alta | Como usuário, quero identificar os meses mais críticos para planejar ações preventivas.           | ✅ O sistema deve identificar corretamente os meses de maior risco com base no banco de dados Queimadas. <br> ✅ As informações das análises devem ser exibidas de forma clara e acessível. | 🔹 Banco de dados validado: Queimadas. <br> 🔹 Softwares: PostgreSQL, DB Designer. |
| RF12  | Análise de relação entre risco e área queimada | Permitir analisar se o risco de fogo está associado a áreas queimadas. | Alta | Como usuário, quero avaliar a correlação entre risco de fogo e áreas queimadas para melhorar previsões. | ✅ O sistema deve identificar corretamente a relação entre o risco e a área queimada com base nos dados filtrados do banco de dados Queimadas. <br> ✅ As informações entre o risco e a área queimada devem ser exibidas de forma clara e acessível. | 🔹 Cálculos estatísticos definidos e validados. <br> 🔹 Softwares: PostgreSQL, DB Designer. |
| RF13  | Diagramas UML                     | Criar diagramas de casos de uso, classes e sequência.  | Alta | Como usuário, quero visualizar diagramas UML para entender melhor o funcionamento do sistema.      | ✅ Os diagramas devem ser criados utilizando Astah. <br> ✅ A modelagem deve seguir os requisitos validados pelo PO antes da implementação. <br> ✅ Os diagramas devem ser revisados pela equipe para garantir precisão. | 🔹 Requisitos levantados antes da modelagem UML. <br> 🔹 Softwares: Astah. |


<h2>Ferramentas Utilizadas</h2>
<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg", width="40", heigth="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", width="40", heigth="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg", width="40", heigth="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", width="40", heigth="40"/>
  <img src="https://github.com/Capydev-jac/Capydev/blob/main/docs/images/dbdesignerlogo.png", width="40", heigth="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg", width="40", heigth="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg", width="40", heigth="40"/>
  <img src="https://github.com/Capydev-jac/Capydev/blob/main/docs/images/typescript_logo.png", width="40", heigth="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg", width="40", heigth="40"/>
</div>

<h2>Equipe</h2>

| Nome | Cargo | Midia Social |
| ---- | ----- | ------------ |
| Pedro Prado | Scrum Master | <a href="https://github.com/PeedroPrado"><img src="https://skillicons.dev/icons?i=github"></a> |
| Felipe Ribeiro | Product Owner | <a href="https://github.com/feliperib286"><img src="https://skillicons.dev/icons?i=github"></a> |
| Felipe Adriano | Desenvolvedor | <a href="https://github.com/Felipe-ACG"><img src="https://skillicons.dev/icons?i=github"></a> |
| Gabriel Frois | Desenvolvedor | <a href="https://github.com/GabrielFrois"><img src="https://skillicons.dev/icons?i=github"></a> |
| Gabriel Camargo | Desenvolvedor | <a href="https://github.com/AllanDreemur"><img src="https://skillicons.dev/icons?i=github"></a> |
| João Victor | Desenvolvedor | <a href="https://github.com/joaoestreano"><img src="https://skillicons.dev/icons?i=github"></a> |

# previsao.tempo
Site de previsão do tempo

#Programas necessários para execução da aplicação:

Eclipse
Instalar e configurar MongoDB
https://pplware.sapo.pt/tutoriais/mongodb-instalar-e-configurar-a-bd-nosql-no-windows-10/

#Preparação do projeto:
1 - Clonar/Baixar projeto do github
2 - Abrir projeto no Eclipse
3 - Executar o Maven para baixar as dependencias. Alt+F5 
	ou clicar botão direito do mouse em cima do projeto > Maven > Update project...
4 - Executar o projeto
5 - Abrir o navegador e digitar o seguinte endereço: localhost:8080


#Uso da aplicação:
1 - Inicialmente a aplicação irá abrir sem cidades cadastradas.
2 - Ao clicar no botão de cadastrar cidades, irá abrir um modal para adicionar o nome da cidade
	2.1 - Caso adicione uma cidade inválida, não sera cadastrada
3 - A cidade cadastrada será adicionado no grid abaixo
4 - Opção de filtrar pelo nome código da cidade 
5 - Ao clicar na cidade adicionado no grid, o site será redirecionado para a pagina de previsão do tempo
	5.1 - Nesta página terá a previsão do dia atual, e dos próximos 4 dias
	5.2 - Nos próximos dias terá a previsão de temperatura mínimo e máximo
6 - Criado log (previsao.tempo > target > previsao-tempo-logger.log)
7 - Criado Testes (src/test/java > previsao.tempo.test > CityServiceTeste.java)


# previsao.tempo
Site de previsão do tempo

#Programas necessários para execução da aplicação:

Eclipse;
Instalar e configurar MongoDB;
https://pplware.sapo.pt/tutoriais/mongodb-instalar-e-configurar-a-bd-nosql-no-windows-10/

#Preparação do projeto:
1 - Clonar/Baixar projeto do github;
	1.1 - https://github.com/Evertonslv/previsao.tempo.git
2 - Abrir projeto no Eclipse;
3 - Executar o Maven para baixar as dependencias. Alt+F5;
	ou clicar botão direito do mouse em cima do projeto > Maven > Update project...;
4 - Executar o projeto;
5 - Abrir o navegador e digitar o seguinte endereço: localhost:8080;


#Uso da aplicação:
1 - Inicialmente a aplicação irá abrir sem cidades cadastradas;
2 - Ao clicar no botão de cadastrar cidades, irá abrir um modal para adicionar o nome da cidade;
	2.1 - Caso adicione uma cidade inválida, não sera cadastrada;
3 - A cidade cadastrada será adicionado no grid abaixo;
4 - Opção de filtrar pelo nome ou código da cidade;
5 - Ao clicar na cidade adicionado no grid, o site será redirecionado para a página de previsão do tempo;
	5.1 - Nesta página terá a previsão do dia atual, e dos próximos 4 dias;
	5.2 - Nos próximos dias terá a previsão de temperatura mínimo e máximo, humidade e velocidade do vendo;
6 - Foi criado log (previsao.tempo > target > previsao-tempo-logger.log);
7 -Foi criado Testes (src/test/java > previsao.tempo.test > CityServiceTeste.java);
	7.1 - Teste se existe cidades cadastradas
	7.2 - Teste se existe uma determinada cidade cadastrada
	7.3 - Teste ao cadastrar uma cidade.


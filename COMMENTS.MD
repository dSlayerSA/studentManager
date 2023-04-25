Comentários sobre o Projeto Student Management 

Arquitetura utilizada:
O projeto Student Management utiliza uma arquitetura cliente-servidor, onde o frontend é desenvolvido com Vue.js e Vuetify, e o backend com PHP utilizando o framework Laravel. A comunicação entre as duas partes é realizada através de requisições HTTP via API.


Foram utilizadas as seguintes bibliotecas:
Vuetify: uma biblioteca de componentes de interface do usuário baseada em Material Design para Vue.js;
Axios: um cliente HTTP baseado em Promises para o navegador e Node.js;
Laravel: um framework PHP gratuito e de código aberto, utilizado para o desenvolvimento de aplicações web robustas e escaláveis.


Organização dos arquivos:
O projeto está organizado em duas pastas principais: "fe-student" para o FrontEnd e "be-student" para o BackEnd. O frontend está dividido em componentes Vue.js na pasta "src/", e as requisições para a API são feitas através do "/src/App.vue". Já o backend segue a estrutura de pastas padrão do Laravel, onde os arquivos de rota ficam na pasta "routes", os controladores na pasta "app/Http/Controllers", as migrações de banco de dados na pasta "database/migrations", e assim por diante.


Estrutura do banco de dados:
O banco de dados possui apenas uma tabela, chamada "students", com os seguintes campos:
AR:PK número de identificação do aluno;
name: nome completo do aluno;
cpf: número do CPF do aluno;
email: endereço de e-mail do aluno.


Comunicação entre o frontend e o backend:
As requisições HTTP são feitas pelo frontend utilizando o cliente Axios, e o backend responde com as informações solicitadas pela API. As respostas são tratadas pelo frontend de acordo com as necessidades da aplicação, como exibir informações na tela, armazenar dados em variáveis, etc.

Fluxo de dados:
O frontend envia requisições HTTP para a API do backend, que processa as informações solicitadas e retorna as respostas correspondentes. Essas respostas são tratadas pelo frontend e utilizadas para atualizar a interface do usuário ou armazenadas em variáveis para serem utilizadas posteriormente. O fluxo de dados é bidirecional, pois o frontend também pode enviar dados para o backend através de requisições HTTP POST ou PUT.

Melhorias: 
-Ajustaria detalhes no form durante a edição de alunos.
-Faria retornos/respostas das requisições melhores.
-Melhoraria as verificações do preenchimento das informações para que não houvessem alunos com informações incorretas.


Requisitos não obrigatórios não terminado:
-Infelizmente não consegui fazer o deploy do backend. Fiz o deploy do frontend com facilidade no netlify, quando fui fazer o deploy do backend descobri que o Heroku agora está pago e acabou deixando de ser uma opção viável. A ideia era subir um servidor ec2 no AWS e subir as imagens do Banco de Dados e do php criadas pelo docker-compose.
Consegui fazer as configurações para as imagens funcionarem depois de bastante tempo tentando.
Subi o repositório do meu projeto no ec2, subi as imagens e rodei o docker-compose up para iniciar os containers.
O ip publico para a URL da API do ec2 muda toda hora. ficou inviável.
Fiquei feliz por conseguir concretizar a ideia, depois de muita dificuldade.Os resultados não foram como esperado.
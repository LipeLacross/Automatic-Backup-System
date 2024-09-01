# Sistema de Backup Automático

O Sistema de Backup Automático é uma solução projetada para realizar backups regulares de arquivos importantes. O sistema armazena os backups no Amazon S3 e permite a restauração fácil dos arquivos quando necessário. É ideal para garantir a segurança e integridade dos dados críticos.

## 🔨 Funcionalidades do Projeto

- **Backup Automático:** Realiza backups automáticos de arquivos importantes em intervalos regulares.
- **Armazenamento na Nuvem:** Os arquivos de backup são armazenados no Amazon S3, garantindo a segurança e a disponibilidade.
- **Restauração de Arquivos:** Permite restaurar facilmente os arquivos de backup para o sistema local.

### Exemplo Visual do Projeto

A interface do projeto é simples, com um formulário para upload de arquivos para backup e um botão para restaurar arquivos específicos. O backend é responsável por toda a lógica de backup e restauração, utilizando o Amazon S3.

## ✔️ Técnicas e Tecnologias Utilizadas

- **Node.js:** Plataforma JavaScript para desenvolvimento do servidor.
- **Express.js:** Framework web para Node.js.
- **AWS S3:** Serviço de armazenamento na nuvem da Amazon.
- **Multer:** Middleware para upload de arquivos em Node.js.
- **Pug:** Motor de templates para renderização de páginas HTML.

## 📁 Estrutura do Projeto

- **app.js:** Arquivo principal que configura o servidor Express e gerencia as rotas.
- **bin/**
    - **www:** Script que inicia o servidor.
- **config/**
    - `awsConfig.js`: Configuração da conexão com o serviço AWS S3.
- **services/**
    - `backupService.js`: Serviço responsável por fazer o upload de arquivos para o Amazon S3.
    - `restoreService.js`: Serviço responsável por fazer o download de arquivos do Amazon S3.
- **public/**
    - **images/**: Pasta para armazenar imagens.
    - **javascripts/**: Pasta para scripts JavaScript.
    - **stylesheets/**
        - `style.css`: Arquivo CSS principal para estilização do projeto.
- **routes/**
    - `index.js`: Gerencia as rotas da aplicação, incluindo as rotas de backup e restauração.
    - `users.js`: Rotas relacionadas aos usuários (não utilizadas no sistema de backup).
- **views/**
    - `error.pug`: Template para a página de erro.
    - `index.pug`: Template para a página inicial do sistema de backup.
    - `layout.pug`: Template base para as páginas do projeto.
- **LICENSE:** Arquivo de licença do projeto.
- **package.json:** Lista de dependências e scripts do projeto.
- **package-lock.json:** Arquivo de bloqueio de dependências para garantir a consistência das versões instaladas.

## 🛠️ Abrir e rodar o projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**:
    - O [Node.js](https://nodejs.org/) é necessário para rodar o projeto. Você pode verificar se já o tem instalado com:
      ```bash
      node -v
      ```
    - Se não estiver instalado, baixe e instale a versão recomendada.

2. **Clone o Repositório**:
    - Copie a URL do repositório e execute o comando abaixo no terminal:
      ```bash
      git clone <URL_DO_REPOSITORIO>
      ```

3. **Instale as Dependências**:
    - Navegue até a pasta do projeto e execute o seguinte comando para instalar as dependências:
      ```bash
      npm install
      ```

4. **Configure as Credenciais da AWS**:
    - Crie um arquivo `.env` na raiz do projeto com as suas credenciais da AWS:
      ```
      AWS_ACCESS_KEY_ID=your_access_key_id
      AWS_SECRET_ACCESS_KEY=your_secret_access_key
      ```

5. **Inicie o Servidor**:
    - Execute o comando abaixo para iniciar o servidor:
      ```bash
      npm start
      ```
    - O servidor estará rodando em `http://localhost:3000`.

## 🌐 Deploy

Para realizar o deploy do projeto, você pode utilizar serviços como Heroku, AWS Elastic Beanstalk, ou qualquer outro serviço de hospedagem que suporte Node.js.

1. **Prepare as Configurações de Produção**:
    - Certifique-se de configurar corretamente as variáveis de ambiente para produção.

2. **Deploy no Serviço Escolhido**:
    - Siga as instruções específicas do serviço de hospedagem para fazer o deploy do projeto.

3. **Verifique o Funcionamento**:
    - Após o deploy, acesse a URL do projeto para garantir que tudo está funcionando corretamente.

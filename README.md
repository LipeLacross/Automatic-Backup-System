## 🌐 [English Version of README](README_EN.md)

# Sistema de Backup

O Sistema de Backup é uma solução projetada para realizar backups de arquivos importantes e permitir a restauração dos mesmos quando necessário. O sistema armazena os backups no Amazon S3 e possui uma interface simples para o upload de arquivos e a restauração dos mesmos.

## 🔨 Funcionalidades do Projeto

- **Backup Manual:** Permite o upload manual de arquivos para realizar o backup.
- **Armazenamento na Nuvem:** Os arquivos de backup são armazenados no Amazon S3, garantindo a segurança e a disponibilidade.
- **Restauração de Arquivos:** Permite restaurar arquivos do backup para o sistema local através da interface.

### Exemplo Visual do Projeto

![image](https://github.com/user-attachments/assets/1f56e155-6a6a-4a41-92de-0e898ee835f4)

## ✔️ Técnicas e Tecnologias Utilizadas

- **Node.js:** Plataforma JavaScript para desenvolvimento do servidor.
- **Express.js:** Framework web para Node.js.
- **AWS S3:** Serviço de armazenamento na nuvem da Amazon.
- **Multer:** Middleware para upload de arquivos em Node.js.
- **Pug:** Motor de templates para renderização de páginas HTML.

## 📁 Estrutura do Projeto

- **app.js:** Arquivo principal que configura o servidor Express, a integração com o AWS S3 e as rotas.
- **bin/**
    - **www:** Script que inicia o servidor.
- **config/**
    - `awsConfig.js`: Configuração da conexão com o serviço AWS S3.
- **LICENSE:** Arquivo de licença do projeto.
- **package.json:** Lista de dependências e scripts do projeto.
- **package-lock.json:** Arquivo de bloqueio de dependências para garantir a consistência das versões instaladas.
- **public/**
    - **images/**: Pasta para armazenar imagens.
    - **javascripts/**: Pasta para scripts JavaScript.
    - **stylesheets/**
        - `style.css`: Arquivo CSS principal para estilização do projeto.
- **routes/**
    - `index.js`: Gerencia as rotas da aplicação, incluindo as rotas de backup e restauração.
    - `users.js`: Rotas relacionadas aos usuários (não utilizadas no sistema de backup).
- **uploads/**: Pasta para armazenar arquivos carregados temporariamente.
- **views/**
    - `error.pug`: Template para a página de erro.
    - `index.pug`: Template para a página inicial do sistema de backup.
    - `layout.pug`: Template base para as páginas do projeto.

## 🛠️ Abrir e Rodar o Projeto

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
      AWS_REGION=us-east-1
      AWS_BUCKET_NAME=your_bucket_name
      ```

5. **Inicie o Servidor**:
    - Execute o comando abaixo para iniciar o servidor:
      ```bash
      npm start
      ```
    - O servidor estará rodando em `http://localhost:3000`.

## 🌐 Deploy

O projeto está disponível online. Acesse o site para verificar o funcionamento:

- [https://backupsempre.netlify.app/](https://backupsempre.netlify.app/)

Para realizar o deploy em outros serviços, como Heroku ou AWS Elastic Beanstalk, siga as instruções específicas do serviço escolhido e certifique-se de configurar corretamente as variáveis de ambiente para produção.

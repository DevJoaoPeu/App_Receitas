# Receitas App

Este é o repositório do projeto Receitas App, um aplicativo de receitas onde os usuários podem se cadastrar, fazer login, visualizar receitas cadastradas, buscar por receitas específicas e adicionar suas próprias receitas.

<p align="center">
  <img src="https://raw.githubusercontent.com/DevJoaoPeu/App_Receitas/ee04b38021fb44f937a90cda23c4b4eb8ede628b/web/public/tela-login.png" width="400" height="auto" alt="Descrição da imagem 1">
  <img src="https://raw.githubusercontent.com/DevJoaoPeu/App_Receitas/ee04b38021fb44f937a90cda23c4b4eb8ede628b/web/public/tela-home.png" width="400" height="auto" alt="Descrição da imagem 2">
  <img src="https://raw.githubusercontent.com/DevJoaoPeu/App_Receitas/ee04b38021fb44f937a90cda23c4b4eb8ede628b/web/public/tela-addReceita.png" width="400" height="auto" alt="Descrição da imagem 3">
</p>

## Funcionalidades

- **Cadastro e Login de Usuários:** Os usuários podem se cadastrar e fazer login para acessar o aplicativo.
- **Listagem de Receitas:** Na tela inicial, os usuários podem visualizar todas as receitas cadastradas pelos usuários.
- **Busca de Receitas:** Os usuários podem buscar por receitas específicas pelo nome.
- **Cadastro de Receitas:** Os usuários podem adicionar suas próprias receitas, incluindo título, descrição, ingredientes e um link para o vídeo do YouTube que demonstra a preparação da receita.

## Tecnologias Utilizadas

### Backend
- TypeScript
- Node.js
- Express.js
- Prisma
- MongoDB
- bcrypt (para criptografia de senhas)
- JSON Web Token (JWT) (para autenticação segura)

### Frontend
- TypeScript
- React
- Next.js
- nookies (para armazenamento de dados em cookies)
- Axios (para consumo da API)

## Como Contribuir

Se deseja contribuir com o projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Clone o fork para o seu ambiente de desenvolvimento.
3. Crie uma branch para sua contribuição: `git checkout -b feature/nome-da-sua-feature`.
4. Faça as alterações necessárias e adicione os commits: `git commit -m 'Adiciona nova funcionalidade'`.
5. Faça o push para a sua branch: `git push origin feature/nome-da-sua-feature`.
6. Abra um Pull Request no repositório original.

## Executando o Projeto Localmente

Para executar o projeto localmente, siga estas instruções:

1. Clone o repositório para o seu ambiente de desenvolvimento.
2. Navegue até o diretório `server` e execute `npm install` para instalar as dependências do backend.
3. Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias.
4. Execute `npm run dev` para iniciar o servidor backend.
5. Navegue até o diretório `web` e execute `npm install` para instalar as dependências do frontend.
6. Execute `npm run dev` para iniciar o servidor de desenvolvimento frontend.
7. Abra o navegador e acesse `http://localhost:3000` para visualizar o aplicativo.

Se tiver alguma dúvida ou problema, sinta-se à vontade para abrir uma issue neste repositório.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

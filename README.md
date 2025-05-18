# TaskFlow 🧩

TaskFlow é uma aplicação web para gerenciamento de tarefas estilo Kanban, com funcionalidades como registro/login, criação de tarefas, organização por colunas (flows), marcação como completas e subtarefas em uma timeline. O projeto está dividido em três partes:

- **Backend (Node.js + PostgreSQL)**
- **Frontend (React)**
- **Docker (ambiente containerizado)**

---

## 🛠️ Tecnologias

- Node.js
- PostgreSQL
- Express
- React
- Styled Components
- Docker
- WebSocket (`ws`)

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Julianooutlook/TaskFlow.git
cd TaskFlow
````
### Agora, crie o arquivo .env na pasta backend/config, copiando os dados do .env.example coloque as variáveis de ambiente, exemplo:

```env
POSTGRES_USER=usuario
POSTGRES_PASSWORD=senha123
POSTGRES_DB=meubanco
POSTGRES_HOST=db
POSTGRES_PORT=5432
PORT=4000
JWT_SECRET_KEY=ChaveSecreta
```

# Iniciar containers Docker
### Certifique-se de que o Docker está rodando, então, na raiz do projeto execute:
```bash
docker compose up --build -d
```
 Esse comando irá construir e subir os containers necessários para o backend, banco de dados e frontend.

---

### Se tudo ocorreu corretamente você deve ver a Home ao acessar http://localhost:3000.

## No fim da página tem um botão para se registrar no TaskFlow.

![Demonstração do TaskFlow](https://i.imgur.com/RbJNBRk.gif)


### http://localhost:3000/register











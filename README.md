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

# EM CONSTRUÇÃO












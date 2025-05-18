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
### Agora, na raíz do projeto vai ter um arquivo ( .env.example ) apenas apague a extensão dele ou crie um ( .env ) com os dados de exemplo abaixo:
.env
```
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

<<<<<<< HEAD
✅ Acesse a aplicação
Se tudo ocorrer corretamente, acesse:

Home: http://localhost:3000

Registro: http://localhost:3000/register

No fim da página principal, há um botão para criar sua conta.

📸 Demonstração
![Demonstração do TaskFlow](https://i.imgur.com/RbJNBRk.gif)


## Conclusão
O TaskFlow foi criado para oferecer uma maneira prática e visual de organizar tarefas e projetos. Ele pode ser usado tanto por equipes quanto por indivíduos que desejam mais controle e fluidez no seu fluxo de trabalho.

Sinta-se à vontade para contribuir, sugerir melhorias ou adaptar a ferramenta às suas necessidades!
=======
### Se tudo ocorreu corretamente você deve ver a Home ao acessar http://localhost:3000.

## No fim da página tem um botão para se registrar no TaskFlow.

![Demonstração do TaskFlow](https://i.imgur.com/RbJNBRk.gif)


### http://localhost:3000/register






>>>>>>> 40d8e3130d03fd1af566e55c1f1666210776bede





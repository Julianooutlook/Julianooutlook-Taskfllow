import { WebSocketServer } from "ws";
import { createServer } from "http";

import Express from "express";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import compression from "compression";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "../api/routes/routes.js";
import subtasksRouter from "../api/controllers/subtasks.js";


dotenv.config({ path: "./config/.env" });
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });

const app = Express();
const port = process.env.PORT || 4000;

const server = createServer(app);

const wss = new WebSocketServer({ server });

app.use(Express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(morgan("dev"));
app.use(limiter);
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use("/", routes);
app.use("/subtasks", subtasksRouter);

wss.on('connection', (ws) => {

    console.log('WebSocket conectado');

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message); 

            if (data.type === 'welcome') {
                if (data.user) {
                    
                    ws.send(JSON.stringify({
                        type: 'welcome',
                        message: `Bem-Vindo, ${data.user}`,
                        user: data.user
                    }));

                    broadcastActivity({
                        user: data.user,
                        message: `Bem-vindo, ${data.user}!`,
                        timestamp: new Date().toISOString()
                    });
                } else {
                    console.error('Nome do usuario nao foi enviado corretamente.');
                }

            }

        } catch (error) {
            console.error('Erro ao processar mensagem WebSocket:', error);
        }
    });

    ws.on('close', () => {
        console.log('Cliente WebSocket desconectado.');
    });
});


export function broadcastActivity(activity) {
  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(
        JSON.stringify({
          type: "activity",
          payload: activity,
        })
      );
    }
  });
}

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port} `);
});

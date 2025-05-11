import express from "express";
import * as controller from '../controllers/controller.js';
import { login } from '../middlewares/login.js';
import { register } from '../middlewares/register.js';
import { authenticateToken } from "../middlewares/authMiddlewares.js";


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Servidor Express Rodando');
});

router.post("/login", login);
router.post("/register", register);
router.post("/createTasking", authenticateToken, controller.createTasking);



router.put('/tasks/:id/move', authenticateToken, controller.moveTask);
router.put("/tasks/:id", authenticateToken, controller.updateTask, );

router.get('/flows', authenticateToken, controller.getFlows);
router.get("/tasks", authenticateToken, controller.searchAllTasks,);

router.delete("/tasks/:id", authenticateToken, controller.deleteTask,);

export default router;
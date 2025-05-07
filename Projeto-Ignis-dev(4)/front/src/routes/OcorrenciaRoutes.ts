// routes/ocorrencia.routes.ts
import { Router } from "express";
import OcorrenciaController from "../controllers/OcorrenciaController"; // Importa o controller

const router = Router();

router.get("/risco", OcorrenciaController.Filtrar_risco_fogo); // Usa o método do controller
router.get("/foco_calor", OcorrenciaController.Filtrar_foco_calor); // Usa o método do controller
router.get("/area_queimada", OcorrenciaController.Filtrar_area_queimada); // Usa o método do controller
router.get("/cerrado", OcorrenciaController.Filtrar_cerrado); // Usa o método do controller



export default router;

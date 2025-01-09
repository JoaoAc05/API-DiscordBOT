import express from "express";
import ComandosRouter from "./ComandosRouter.js";
import AdministratorRouter from "./AdministratorRouter.js";
import LoginRouter from "./LoginRouter.js";

const router = express.Router();

//rota default
router.get('/', (req, res) => {
    res.json({
        "statuscode": 200,
        "sucesso": "Rota default - RuralHub Bot"
    });
});

router.use("/comandos", ComandosRouter)
router.use("/admin", AdministratorRouter)
router.use("/login", LoginRouter)
export default router;
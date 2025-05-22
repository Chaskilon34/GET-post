import express from 'express';
import { obtenerVentas, resgitarVenta, } from '../controllers/ventaController.js';

const router = express.Router();

router.get('/', obtenerVentas);
router.post('/', resgitarVenta);

export default router;
